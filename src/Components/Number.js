import React, { useState } from 'react'
import Button from '../AtomicComponents/Button'

const Number = ({handleSubmit, headerText}) => {
    const [number, setNumber] = useState('')
    const handleContinueButtonClick = () => {
        // Some db call here, move to next step
        handleSubmit()
    }
    return (
        <div>
            <h4>Enter your 10 digit number</h4>
            <input type='text' value={number} onChange={e => setNumber(e.target.value)} />
            <Button text="Continue" type="button" handleClick={handleContinueButtonClick} />
        </div>
    )
}

export default Number
