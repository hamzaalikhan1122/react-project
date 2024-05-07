import { Field, Form, Formik } from "formik";
import Modal from "../UI/Modal";
import { useContext, useRef } from "react";
import { UserProgressContext } from "../../store/UserProgressContext";
import * as Yup from "yup";
import Button from "../UI/Button";
import { CartContext } from "../../store/CartContext";
import useHttp from "../../hooks/useHttp";
import Error from "../Error";

let requestConfig = {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
};

function Checkout() {
  const formikRef = useRef();
  const cartCtx = useContext(CartContext);

  const userProgressCtx = useContext(UserProgressContext);

  const {
    data,
    isLoading: isSending,
    error,
    sendRequest,
    handleResetData,
  } = useHttp("http://localhost:3000/orders", requestConfig);
  console.log(data);
  const CheckoutSchema = Yup.object().shape({
    fullName: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    email: Yup.string().email("Invalid email").required("Required"),
    street: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    postalCode: Yup.number().required("Required"),
    city: Yup.string().required("Required").min(2, "Too Short!"),
  });

  function handleCloseCheckout() {
    // Check if the Formik instance is available and then reset the form
    if (formikRef.current) {
      formikRef.current.resetForm();
    }
    userProgressCtx.hideCheckout();
  }

  function handleFinish() {
    if (formikRef.current) {
      formikRef.current.resetForm();
    }

    userProgressCtx.hideCheckout();
    cartCtx.resetCart();
    handleResetData();
  }

  if (error) return <Error title="Error while ordering meal" message={error} />;

  let actions = (
    <>
      <Button type="button" onClick={handleCloseCheckout} textOnly>
        Close
      </Button>
      <Button type="submit">Submit</Button>
    </>
  );

  if (isSending) {
    actions = <span>Sending order data...</span>;
  }

  if (data && !error) {
    return (
      <Modal
        open={userProgressCtx.progress === "checkout"}
        onClose={handleFinish}
      >
        <h2 className="text-xl text-green-600 font-bold ">Success!</h2>
        <p>Your order was submitted successfully.</p>
        <p>
          We will get back to you with more details via email within next few
          minutes
        </p>
        <p>
          <Button onClick={handleFinish}>Okay</Button>
        </p>
      </Modal>
    );
  }

  return (
    <Modal
      open={userProgressCtx.progress === "checkout"}
      onClose={
        userProgressCtx.progress === "checkout" ? handleCloseCheckout : null
      }
    >
      <h2>Your Checkout</h2>
      <Formik
        initialValues={{
          fullName: "",
          email: "",
          street: "",
          postalCode: "",
          city: "",
        }}
        validationSchema={CheckoutSchema}
        onSubmit={(values) => {
          const order = {
            items: cartCtx.items,
            customer: values,
          };
          sendRequest({ order });
          // alert(JSON.stringify(values, null, 2));
          formikRef.current.resetForm();
        }}
        innerRef={formikRef}
      >
        {({ errors, touched }) => (
          <Form className="control">
            <label htmlFor="fullName">Full Name</label>
            <Field name="fullName" type="text" className="rounded-md" />
            {errors.fullName && touched.fullName ? (
              <div className="text-red-600">{errors.fullName}</div>
            ) : null}

            <label htmlFor="email">Email</label>
            <Field name="email" type="email" />
            {errors.email && touched.email ? (
              <div className="text-red-600">{errors.email}</div>
            ) : null}

            <label htmlFor="street">Street</label>
            <Field name="street" />
            {errors.street && touched.street ? (
              <div className="text-red-600">{errors.street}</div>
            ) : null}

            <label htmlFor="postalCode">Postal Code</label>
            <Field name="postalCode" type="number" />
            {errors.postalCode && touched.postalCode ? (
              <div className="text-red-600">{errors.postalCode}</div>
            ) : null}

            <label htmlFor="city">City</label>
            <Field name="city" />
            {errors.city && touched.city ? (
              <div className="text-red-600">{errors.city}</div>
            ) : null}
            <p className="modal-actions">{actions}</p>
          </Form>
        )}
      </Formik>
    </Modal>
  );
}

export default Checkout;
