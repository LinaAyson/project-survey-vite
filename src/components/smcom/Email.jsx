import React, { useState } from "react";

export const Email = ({ updateFormData, value }) => {
  const [triedToProceed, setTriedToProceed] = useState(false);

  const emailInput = (e) => {
    const inputValue = e.target.value;
    updateFormData("email", inputValue);
  };

  const isValidEmail = (value) => {
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    return emailRegex.test(value);
  };

  const showErrorMessage = triedToProceed && !isValidEmail(value);

  return (
    <div className="container-qst">
      <label>Email:</label>
      <input
        type="email"
        value={value}
        onChange={emailInput}
        onBlur={() => setTriedToProceed(true)} // Update the state on blur
      />
      {showErrorMessage && (
        <p className="error-message">Invalid email format</p>
      )}
    </div>
  );
};
