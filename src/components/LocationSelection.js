import React from 'react';
import LocationButton from './LocationButton';

class LocationSelection extends React.Component {
    render() {
        return (
            <>
            <select className="custom-select custom-select">
                <option selected>CHOOSE YOUR LOCATION</option>
                <option value="1">LONDON</option>
                <option value="2">SALFORD</option>
                <option value="3">GLASGOW</option>
                <option value="4">LEICESTER</option>
                <option value="5">CARDIFF</option>
                <option value="5">BELFAST</option>
            </select>
            <LocationButton getIdProps={this.props.getIdProps}/>
            </>

        )
    }
}

export default LocationSelection;



