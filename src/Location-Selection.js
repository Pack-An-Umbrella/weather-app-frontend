import React from 'react';

class LocationSelection extends React.Component {
    render() {
        return (
            <select className="custom-select custom-select">
                <option selected>DON'T FORGET YOUR BROLLY!</option>
                <option value="1">LONDON</option>
                <option value="2">EDINBURGH</option>
                <option value="3">MANCHESTER</option>
                <option value="4">BIRMINGHAM</option>
                <option value="5">NEWCASTLE</option>
                <option value="5">READING</option>
                
            </select>


        )
    }
}

export default LocationSelection



