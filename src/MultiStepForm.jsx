import React, { useState, useEffect } from "react";
import { Age } from "./components/smcom/Age";
import { YearsExp } from "./components/smcom/YearsExp";
import { Education } from "./components/smcom/Education";
import { ProgrammingLang } from "./components/smcom/ProgrammingLang";
import { Email } from "./components/smcom/Email";
import { Name } from "./components/smcom/Name";
import FormSummary from "./components/FormSummary";

export const MultiStepForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    email: "",
    number: "",
    favoriteCode: "",
    yearsOfExperience: "",
    educationDegree: "",
  });

  const [triedToProceed, setTriedToProceed] = useState(false);

  const updateFormData = (field, value) => {
    setFormData((values) => ({ ...values, [field]: value }));
  };
  // Initialize currentStep to 1
  const [currentStep, setCurrentStep] = useState(1);

  // Function to check if the email input is valid

  const isValidEmail = (email) => {
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    return emailRegex.test(email);
  };

  const nextStep = () => {
    if (currentStep < 6) setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  const [showSummary, setShowSummary] = useState(false);

  // useeffect
  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.key === "Enter") {
        if (currentStep < 6) nextStep();
      } else if (e.key === "ArrowLeft") {
        if (currentStep > 1) prevStep();
      }
    };

    document.addEventListener("keydown", handleKeyPress);

    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, [currentStep]);

  return (
    <div>
      {showSummary ? (
        <FormSummary formData={formData} />
      ) : (
        <div>
          {currentStep === 1 && (
            <Name value={formData.name} updateFormData={updateFormData} />
          )}
          {currentStep === 2 && (
            <Age value={formData.age} updateFormData={updateFormData} />
          )}
          {currentStep === 3 && (
            <Email value={formData.email} updateFormData={updateFormData} />
          )}
          {currentStep === 4 && (
            <ProgrammingLang
              value={formData.favoriteCode}
              updateFormData={updateFormData}
            />
          )}
          {currentStep === 5 && (
            <YearsExp
              value={formData.yearsOfExperience}
              updateFormData={updateFormData}
            />
          )}
          {currentStep === 6 && (
            <Education
              value={formData.educationDegree}
              updateFormData={updateFormData}
            />
          )}
          {currentStep === 7 && (
            <PhoneNumber
              value={formData.userNumber}
              updateFormData={updateFormData}
            />
          )}
          <div className="container-button">
            {currentStep > 1 && (
              <button className="action-button" onClick={prevStep}>
                Back
              </button>
            )}
            {currentStep < 6 ? (
              <button
                className="action-button"
                onClick={() => {
                  setTriedToProceed(true); // Update the state when the user clicks "Next"
                  if (currentStep < 6) nextStep();
                }}
                disabled={currentStep === 3 && !isValidEmail(formData.email)}
              >
                Next
              </button>
            ) : (
              <button
                className="action-button"
                onClick={() => {
                  setShowSummary(true);
                }}
              >
                Submit
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
