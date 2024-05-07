import { Link, useNavigate, useParams } from "react-router-dom";

import Modal from "../UI/Modal.jsx";
import EventForm from "./EventForm.jsx";
import { useMutation, useQuery } from "@tanstack/react-query";
import { fetchEvent, queryClient, updateEvent } from "../../util/http.js";
import ErrorBlock from "../UI/ErrorBlock.jsx";

export default function EditEvent() {
  const navigate = useNavigate();
  const params = useParams();

  //FETCHING
  const { data, isError, error } = useQuery({
    queryKey: ["events", params.id],
    queryFn: ({ signal }) => fetchEvent({ signal, id: params.id }),
  });

  //MUTATION
  const {
    mutate,
    isError: isErrorUpdating,
    isPending: isPendingUpdation,
    error: updateError,
  } = useMutation({
    mutationFn: updateEvent,
    // onSuccess: () => {
    //   queryClient.invalidateQueries({
    //     queryKey: ["events"],
    //     refetchType: "none",
    //   });
    // },
    onMutate: async (data) => {
      console.log(data);
      const newEvent = data.eventData;
      await queryClient.cancelQueries({ queryKey: ["events", params.id] });

      const prevEvent = queryClient.getQueryData(["events", params.id]);

      queryClient.setQueryData(["events", params.id], newEvent);
      return { prevEvent };
    },
    onError: (error, data, context) => {
      queryClient.setQueryData(["events", params.id], context.prevEvent);
    },
    onSettled: () => {
      queryClient.invalidateQueries(["events", params.id]);
    },
  });

  function handleSubmit(formData) {
    mutate({ id: params.id, eventData: formData });
    navigate("../");
  }

  function handleClose() {
    navigate("../");
  }

  return (
    <Modal onClose={handleClose}>
      {isError && (
        <ErrorBlock
          title="Error while editing event"
          message={
            error.info?.message ||
            "An error occurred while fetching event data for editing."
          }
        />
      )}
      {data && (
        <EventForm inputData={data} onSubmit={handleSubmit}>
          {isPendingUpdation && <p>Data is updating...</p>}
          {!isPendingUpdation && (
            <>
              {" "}
              <Link to="../" className="button-text">
                Cancel
              </Link>
              <button type="submit" className="button">
                Update
              </button>
            </>
          )}
        </EventForm>
      )}
      {isErrorUpdating && (
        <ErrorBlock
          title="Error while updating data"
          message={
            updateError.info?.message ||
            "There was an error updating event. Please try again later."
          }
        />
      )}
    </Modal>
  );
}

export function loader({ params }) {
  return queryClient.fetchQuery({
    queryKey: ["events", params.id],
    queryFn: ({ signal }) => fetchEvent({ signal, id: params.id }),
  });
}
