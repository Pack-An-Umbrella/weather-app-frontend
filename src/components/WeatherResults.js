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
                    <h2><FeelsLike currentFeelsLikeTemp={this.props.currentFeelsLikeTemp} /></h2>
                    <h2><UVIndex currentMaxUVIndex={this.props.currentMaxUVIndex} /></h2>
                    <h2><ChanceOfRain currentChanceOfRain={this.props.currentChanceOfRain} /></h2>
                </div>
                <Weather currentWeatherType={this.props.currentWeatherType}
                    currentWeatherValue={this.props.currentWeatherValue} />


            </>

        )
    }
}

export default WeatherResults;