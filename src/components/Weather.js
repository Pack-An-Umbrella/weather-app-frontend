import React from 'react';

class Weather extends React.Component {
    render() {
        return (
            <>
            <h1 className="WeatherType">{this.props.currentWeatherType}</h1>
            {/* <p>weather value: {this.props.currentWeatherValue} </p> */}


            </>

        )
    }
}

export default Weather;