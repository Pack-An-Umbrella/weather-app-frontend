import React from 'react';

class Weather extends React.Component {
    render() {
        return (
            <>
            <p>weather type: {this.props.currentWeatherType}</p>
            {/* <p>weather value: {this.props.currentWeatherValue} </p> */}


            </>

        )
    }
}

export default Weather;