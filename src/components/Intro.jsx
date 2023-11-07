export const Intro = ({nextStep}) => {

  const startSurvey = () => nextStep();

  return (
    <div className="form-div">
        <h1>Halloween survey</h1>
        <p>Welcome to our survey about halloween. Click the start button to start.</p>
        <div className="btn-div">
          <button className="btn-start" onClick={startSurvey}>Start</button>
        </div>
    </div>
  )
}
