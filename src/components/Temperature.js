import React from 'react';

class Temperature extends React.Component {
    render() {
        return (
            <>
            <p>Temperature {this.props.currentTemperature}</p>


            </>

        )
    }
}

export default Temperature;