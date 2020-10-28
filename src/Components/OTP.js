import React,{useState} from 'react'
import Button from '../AtomicComponents/Button'

const OTP = ({handleSubmit}) => {
    const [otp, setOtp] = useState('')

    const handleContinueButtonClick= () => {
        // Perform API calls here
        handleSubmit()
    }
    
    return (
        <div>
            <h4>Enter your 6 digit otp</h4>
            <input type="text" value={otp} onChange={(e) => setOtp(e.target.value)} />
            <Button text="Continue" type="button" handleClick={handleContinueButtonClick} />
        </div>
    )
}

export default OTP
