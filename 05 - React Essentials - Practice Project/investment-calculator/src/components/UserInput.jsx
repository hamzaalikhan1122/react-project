import { useState } from "react";

function UserInput({ dataInput, setInputData }) {
  let inputData = dataInput;
  function handleInputChange(event) {
    const { name, value } = event.target;
    setInputData((prevData) => {
      if (prevData) {
        return { ...prevData, [name]: value };
      }
    });
  }

  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label htmlFor="initial">Initial Investment</label>
          <input
            type="number"
            value={inputData.initial}
            onChange={handleInputChange}
            name="initial"
            required
          />
        </p>
        <p>
          <label htmlFor="annual">Annual Investment</label>
          <input
            type="number"
            name="annual"
            value={inputData.annual}
            onChange={handleInputChange}
            required
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label>Expected Return</label>
          <input
            type="number"
            name="expected"
            value={inputData.expected}
            onChange={handleInputChange}
            required
          />
        </p>
        <p>
          <label>Duration</label>
          <input
            type="number"
            name="duration"
            value={inputData.duration}
            onChange={handleInputChange}
            required
          />
        </p>
      </div>
    </section>
  );
}

export default UserInput;
