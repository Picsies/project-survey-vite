export const Summary = ({name, celebrate, costume}) => {
  let celebrateHalloween = "";
  if (celebrate === "yes"){
    celebrateHalloween = "You celebrate Halloween";
  } 
  else if (celebrate === "no"){
    celebrateHalloween = "You don't celebrate Halloween";
  }
  else {
    celebrateHalloween = "You sometimes celebrate Halloween";
  }
  return (
    <div className='form-div summary'>
      <p>Thank you {name} for taking this survey! </p>
      <p>Here are a summary of your answers </p>
      <p>{celebrateHalloween}</p>
      <p>You are going to dress up as {costume}</p>
      <p>Have a happy Halloween!</p>
    </div>
  )
}
