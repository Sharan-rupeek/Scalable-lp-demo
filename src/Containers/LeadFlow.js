import React, {useState} from 'react'
import data from '../data'

import Number from '../Components/Number'
import GoldWeight from '../Components/GoldWeight'
import OTP from '../Components/OTP'
import Pincode from '../Components/Pincode'

const DoneComponent = () => {
  return (
    <div>Done</div>
  )
}

function LeadFlow() {
  const [currentStep, setCurrentStep] = useState(1)
  const renderPopup = () => {
    if (currentStep > data.leadFlow.length) return <DoneComponent />
    const currentPopup = data.leadFlow.find(popupItem => popupItem.step === currentStep)
    const getPopUpComponent = () => {
      switch(currentPopup.lead) {
        case 'Number': return Number    
        case 'GoldWeight': return GoldWeight
        case 'OTP': return OTP
        case 'Pincode': return Pincode
        default: return null
      }
    }
    const PopupComponent =  getPopUpComponent()
    return <PopupComponent handleSubmit={() => setCurrentStep(currentStep + 1)} />
  }

  return (
    <div className="App">
      {renderPopup()}
    </div>
  );
}

export default LeadFlow;
