import React, { useState } from 'react';

const Watch = () => {
    const [steps, setSteps] = useState(0);
    
    const increaseSteps = () => {
        const newStepsCount = steps + 1;
        setSteps(newStepsCount);
    }
    const decreaseSteps =() => {
        const stopeSteps = steps - 1;
        setSteps(stopeSteps);
    }

    return (
        <div className='steps'>
            <h2>I have smart watch</h2>
            <h3>My Current step: {steps}</h3>
            <button onClick={increaseSteps}>Run</button>
            <button onClick={ decreaseSteps}>Stop</button>
        </div>
    );
};

export default Watch;