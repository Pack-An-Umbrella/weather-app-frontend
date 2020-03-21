import React from 'react';
import ResultsStatement from './ResultsStatement';
import Temperature from './Temperature';
import FeelsLike from './FeelsLike';
import UVIndex from './UVIndex';
import ChanceOfRain from './ChanceOfRain';
import Weather from './Weather';
import './WeatherResults.css';

class WeatherResults extends React.Component {
    render() {
        return (
            <>
                <ResultsStatement />
                <Temperature currentTemperature={this.props.currentTemperature} />
                <div className="icons">
                    <h3><FeelsLike currentFeelsLikeTemp={this.props.currentFeelsLikeTemp} /></h3>
                    <h3><UVIndex currentMaxUVIndex={this.props.currentMaxUVIndex} /></h3>
                    <h3><ChanceOfRain currentChanceOfRain={this.props.currentChanceOfRain} /></h3>
                </div>
                <Weather currentWeatherType={this.props.currentWeatherType}
                    currentWeatherValue={this.props.currentWeatherValue} />


            </>

        )
    }
}

export default WeatherResults;