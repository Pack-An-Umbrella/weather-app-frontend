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
                <FeelsLike currentFeelsLikeTemp={this.props.currentFeelsLikeTemp} />
                <UVIndex currentMaxUVIndex={this.props.currentMaxUVIndex} />
                <ChanceOfRain currentChanceOfRain={this.props.currentChanceOfRain} />
                <Weather currentWeatherType={this.props.currentWeatherType}
                    currentWeatherValue={this.props.currentWeatherValue} />


            </>

        )
    }
}

export default WeatherResults;