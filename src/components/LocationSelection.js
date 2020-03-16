import React from 'react';


class LocationSelection extends React.Component {
    render() {
        return (
            <>
            <select className="custom-select w-90">
                <option selected>CHOOSE YOUR LOCATION</option>
                <option value="1">LONDON</option>
                <option value="2">SALFORD</option>
                <option value="3">GLASGOW</option>
                <option value="4">LEICESTER</option>
                <option value="5">CARDIFF</option>
                <option value="5">BELFAST</option>
            </select>
            </>

        )
    }
}

export default LocationSelection;



