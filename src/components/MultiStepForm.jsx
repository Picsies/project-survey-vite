import { useState } from "react";
import { Intro } from "./Intro";
import { Name } from "./Name";
import { CelebrateHalloween } from "./CelebrateHalloween";
import { Costumes } from "./Costumes";
import { Summary } from "./Summary";


// Define the MultiStepForm component
export const MultiStepForm = () => {
  //State to store form data
  const [formData, setFormData] = useState ({
    name: "",
    celebrate: "",
    costume: "",
  })

//State to track the current step in the form
const [currentStep, setCurrentStep] = useState(1);
//const [showSummary, setShowSummary] = useState(false);

const updateFormData = (field, value) => {
  // SetFormData({...values, name: 'new Value'}) m.m 
  setFormData((values) => ({...values, [field]: value}));
};

const nextStep = () => {
  if (currentStep < 5) setCurrentStep(currentStep + 1);
};

const prevStep = () => {
  if (currentStep > 1) setCurrentStep(currentStep - 1);
};

const submitForm = (e) => {
  console.log(formData);
  const formattedData = `
  Name: ${formData.name}
  ExcitementLevel: ${formData.excitementLevel}
  Opinion: ${formData.opinion}
  Costumes: ${formData.costume}`
  alert(formattedData);
  e.preventDefault();
};

  return (
    <div>
      {/* Render the Intro component if on step 1 */}
      {currentStep === 1 && (
        <Intro 
          nextStep={nextStep} 
        />
      )}
      {/* Render the Name component if on step 2 */}
      {currentStep === 2 && (
        <Name 
          value={formData.name} 
          updateFormData={updateFormData}
          nextStep={nextStep}
          prevStep={prevStep}
        />
      )}
      {currentStep === 3 && (
        <CelebrateHalloween
          value={formData.celebrate}
          input="celebrate"
          updateFormData={updateFormData}
          nextStep={nextStep}
          prevStep={prevStep}
        />
      )}
      {currentStep === 4 && (
        <Costumes
          value={formData.costume}
          updateFormData={updateFormData}
          nextStep={nextStep}
          prevStep={prevStep}
        />
      )
      }
      {currentStep === 5 && (
        <Summary 
          name={formData.name}
          celebrate={formData.celebrate}
          costume={formData.costume}
        />
      )
      }
    </div>
  )
}


