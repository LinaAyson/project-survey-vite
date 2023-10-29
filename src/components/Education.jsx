export const Education = ({ updateFormData, value }) => {
  const educationDegree = (e) =>
    updateFormData("educationDegree", e.target.value);
  return (
    <div className="container-qst">
      <label>What's your educational background related to programming?</label>
      <select value={value} onChange={educationDegree}>
        <option>Select an option</option>
        <option value="bachelor's degree">Bachelor's Degree</option>
        <option value="associate's degree">Associate's Degree</option>
        <option value="self-taught">Self-taught</option>
      </select>
    </div>
  );
};
