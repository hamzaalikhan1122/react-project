import { useState } from "react";

export function useInput(defaultValue, validationFn) {
  const [enteredValue, setEnteredValue] = useState(defaultValue);

  const [didEdit, setDidEdit] = useState(false);

  const valueIsValid = validationFn(enteredValue);

  function handleInputChange(event) {
    setEnteredValue(event.target.value);

    setDidEdit(false);
  }

  function handleInputBlur() {
    setDidEdit(true);
  }

  return {
    didEdit,
    value: enteredValue,
    handleInputBlur: handleInputBlur,
    handleInputChange: handleInputChange,
    setEnteredValue,
    setDidEdit,
    hasError: didEdit && !valueIsValid,
  };
}
