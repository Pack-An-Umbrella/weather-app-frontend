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
                <option value="3">GLASGOW</option>
                <option value="4">LEICESTER</option>
                <option value="5">CARDIFF</option>
                <option value="5">BELFAST</option>
            </select>
            <button className="add btn btn-primary font-weight-bold" onClick = {this.valueExtractor}>Submit</button>
            </>

        )
    }
}

export default LocationSelection;



