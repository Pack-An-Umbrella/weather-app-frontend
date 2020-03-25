import React from 'react';
import './WeatherResults.css'

class Temperature extends React.Component {
    render() {
        return (
            <div className="Temperature">
            <h1>{this.props.currentTemperature}°</h1>
            </div>

        )
    }
}

export default Temperature;