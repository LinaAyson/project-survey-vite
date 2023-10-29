export const Age = ({ updateFormData, value }) => {
  const ageInput = (e) => updateFormData("age", e.target.value);
  return (
    <div className="container-qst">
      <label>Age:</label>
      <input type="number" value={value} onChange={ageInput} min="18" />
    </div>
  );
};
