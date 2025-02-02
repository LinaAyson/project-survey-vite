export const Name = ({ value, updateFormData }) => {
  const userName = (e) => updateFormData("name", e.target.value);

  return (
    <div className="container-qst">
      <label>Enter your full name </label>
      <input
        type="text"
        value={value}
        onChange={userName}
        placeholder="name and surname"
      />
    </div>
  );
};
