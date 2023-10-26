import React from "react";
import "./FormSummary.css";

export default function FormSummary({ formData }) {
  let ageMessage;

  if (formData.age > 45) {
    ageMessage = "experienced worker with great skills and expertise.";
  } else if (formData.age >= 30 && formData.age <= 45) {
    ageMessage = "experienced worker in my best years.";
  } else if (formData.age >= 20 && formData.age < 30) {
    ageMessage = "who is young and energetic.";
  } else {
    ageMessage = "eager learner.";
  }

  return (
    <>
      <div className="container-info">
        <h3>Contact details</h3>
        <div className="">
          <p> {formData.name} </p>
          <p>Email: {formData.email} </p>
        </div>
      </div>
      <div>
        <p className="animated-text">
          My name is {formData.name} and I'm a {formData.age}-year-old{" "}
          {ageMessage}
        </p>

        <p className="animated-text"></p>
        <p className="animated-text">
          I have {formData.yearsOfExperience} years of experience working with
          programming and the language I like the most is{" "}
          {formData.favoriteCode} because of its unique blend of simplicity and
          power. It allows me to solve a wide range of challenges and fosters a
          deep appreciation for coding.
        </p>
        <p className="animated-text">
          My learning journey in programming has been shaped by my dedication
          and passion. Through my {formData.educationDegree} education and
          self-driven learning, I've honed my skills, constantly seeking
          opportunities for growth and improvement.
        </p>
      </div>
    </>
  );
}
