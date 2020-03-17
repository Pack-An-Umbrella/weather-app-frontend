import React from 'react';

class Weather extends React.Component {
    render() {
        return (
            <>
            <p>weather type: {this.props.currentWeatherType}</p>


            </>

        )
    }
}

export default Weather;