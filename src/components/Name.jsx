export const Name = ({value, updateFormData, nextStep, prevStep}) => {
  const userName = (e) => updateFormData("name", e.target.value);
  const startNextStep = () => nextStep();
  const startPrevStep = () => prevStep();

  return (
    <div className="form-div">
      <h4>What's your name:</h4>
      <input type="text" value={value} onChange={userName} />
      <div className="btn-div">
        <button className="btn-back" onClick={startPrevStep}>Back</button>
        <button className="btn-next" onClick={startNextStep}>Next</button>
      </div>
    </div>
  );
};
