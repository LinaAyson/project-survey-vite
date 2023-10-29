export const ProgrammingLang = ({ updateFormData, value }) => {
  const favoriteCode = (e) => updateFormData("favoriteCode", e.target.value);
  return (
    <div className="container-qst">
      <label>Select your favorite programming language</label>
      <select value={value} onChange={favoriteCode}>
        <option value="">Language</option>
        <option value="javascript">JavaScript</option>
        <option value="php">PHP</option>
        <option value="html-css">HTML/CSS</option>
        <option value="python">Python</option>
        <option value="C#">C#</option>
      </select>
    </div>
  );
};
