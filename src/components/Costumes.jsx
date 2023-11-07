export const Costumes = ({updateFormData, value, nextStep, prevStep}) => {

  const dressedAs = (e) => updateFormData("costume", e.target.value);
  const startNextStep = () => nextStep();
  const startPrevStep = () => prevStep();

  return (
    <div className="form-div">
      <h4>What are you going to dress up as?</h4>
      <select value={value} onChange={dressedAs}>
        <option value=""> </option>
        <option value="witch">Witch</option>
        <option value="zombie">Zombie</option>
        <option value="skeleton">Skeleton</option>
        <option value="vampire">Vampire</option>
        <option value="ghost">Ghost</option>
        <option value="devil">The devil</option>
        <option value="angel">Angel</option>
      </select>
      <div className="btn-div">
        <button className="btn-back" onClick={startPrevStep}>Back</button>
        <button className="btn-next" onClick={startNextStep}>Submit</button>
      </div>
    </div>
  )
}
