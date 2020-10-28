import React, {useState} from 'react'
import Button from '../AtomicComponents/Button'

const Pincode = ({handleSubmit}) => {
    const [pincode, setPincode] = useState('')

    const handleContinueButtonClick= () => {
        // Perform API calls here
        handleSubmit()
    }

    return (
        <div>
            <h4>Enter your 6 digit pincode</h4>
            <input type="text" value={pincode} onChange={(e) => setPincode(e.target.value)} />
            <Button text="Continue" type="button" handleClick={handleContinueButtonClick} />
        </div>
    )
}

export default Pincode
