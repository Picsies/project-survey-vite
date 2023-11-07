export const CelebrateHalloween = ({input, updateFormData, nextStep, prevStep}) => {
  const handleInput = (e) => {
    const selectedOption = e.target.value;
    updateFormData(input, selectedOption);
  }
  const startNextStep = () => nextStep();
  const startPrevStep = () => prevStep();

  return (
    <div className="form-div">
      <h4>Do you celebrate Halloween? Choose an option below</h4>
      <div className="radio-btn">
      <label>
        <input type="radio" name="myRadio" value="yes" onChange={handleInput} />Yes
      </label>
      <label>
        <input type="radio" name="myRadio" value="no" onChange={handleInput} />No
      </label>
      <label>
        <input type="radio" name="myRadio" value="sometimes" onChange={handleInput} />Sometimes
      </label>
      </div>
      <div className="btn-div">
        <button className="btn-back" onClick={startPrevStep}>Back</button>
        <button className="btn-next" onClick={startNextStep}>Next</button>
      </div>
    </div>
  )
}

