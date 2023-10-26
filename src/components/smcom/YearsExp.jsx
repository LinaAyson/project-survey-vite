export const YearsExp = ({ updateFormData, value }) => {
  const yearsOfExperience = (e) =>
    updateFormData("yearsOfExperience", e.target.value);

  return (
    <div className="container-qst">
      <label>Years of work experience?</label>
      <div>
        <label>
          <input
            type="radio"
            name="yearsOfExperience"
            value="1"
            checked={value === "1"}
            onChange={yearsOfExperience}
          />
          Junior developer (0-1 year experience)
        </label>
      </div>
      <div>
        <label>
          <input
            type="radio"
            name="yearsOfExperience"
            value="2"
            checked={value === "2"}
            onChange={yearsOfExperience}
          />
          Entry-Level Frontend Developer (1-2 years experience)
        </label>
      </div>
      <div>
        <label>
          <input
            type="radio"
            name="yearsOfExperience"
            value="3"
            checked={value === "3"}
            onChange={yearsOfExperience}
          />
          Intermediate Frontend Developer (2-3 years experience)
        </label>
      </div>
      <div>
        <label>
          <input
            type="radio"
            name="yearsOfExperience"
            value="4+"
            checked={value === "4+"}
            onChange={yearsOfExperience}
          />
          Senior Frontend Developer (4-5 years experience)
        </label>
      </div>
    </div>
  );
};
