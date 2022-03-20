import React from 'react';
import DeviceDetails from './components/DeviceDetails/DeviceDetails';

const Device = (props) => {
    return (
        <div>
            <h2>I have somthing : {props.name}</h2>
            <DeviceDetails price={props.price}></DeviceDetails>
        </div>
    );
};

export default Device;