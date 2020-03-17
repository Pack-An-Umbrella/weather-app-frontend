import React from 'react';
// import LocationButton from './LocationButton';

class LocationSelection extends React.Component {

    valueExtractor = (selected) => {
        this.props.locationSubmit(selected.target.value);
    }

    render() {
        return (
            <>
            <select className="custom-select w-90" defaultValue="" onChange={this.valueExtractor}>
                <option value = "">CHOOSE YOUR LOCATION</option>
                <option value="London">LONDON</option>
                <option value="Salford">SALFORD</option>
                <option value="Glasgow">GLASGOW</option>
                <option value="Leicester">LEICESTER</option>
                <option value="Cardiff">CARDIFF</option>
                <option value="Belfast">BELFAST</option>
            </select>
            </>

        )
    }
}

export default LocationSelection;



