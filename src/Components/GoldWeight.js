import React, {useState} from 'react'
import Button from '../AtomicComponents/Button'

const GoldWeight = ({handleSubmit}) => {
    const [goldWeight, setGoldWeight] = useState()

    const handleContinueButtonClick= () => {
        // Perform API calls here
        handleSubmit()
    }

    const handleChange = (e) => {
        setGoldWeight(e.target.value)
    }

    return (
        <div onChange={handleChange}>
            <h4>Choose gold weight</h4>
            <div>
                <input type="radio" value="0" name="gold" checked={goldWeight === "0"}/>
                <label>I have no gold</label>

                <input type="radio" value="1" name="gold" checked={goldWeight === "1"} />
                <label>I have less than 10 gms</label>

                <input type="radio" value="2" name="gold" checked={goldWeight === "2"} />
                <label>I have more than 10 gms</label>
            </div>

            <Button text="Continue" type="button" handleClick={handleContinueButtonClick} />
        </div> 
    )
}

export default GoldWeight
