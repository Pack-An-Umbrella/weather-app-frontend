import React from 'react';
import ResultsStatement from './ResultsStatement';
import Temperature from './Temperature';
import FeelsLike from './FeelsLike';
import UVIndex from './UVIndex';
import ChanceOfRain from './ChanceOfRain';
import Weather from './Weather';

class WeatherResults extends React.Component {
    render() {
        return (
            <>


            <ResultsStatement />
            <Temperature currentTemperature={this.props.currentTemperature}/>
            <FeelsLike currentFeelsLikeTemp={this.props.currentFeelsLikeTemp} />
            <UVIndex currentMaxUVIndex={this.props.currentMaxUVIndex}/>
            <ChanceOfRain currentFeelsLikeTemp={this.props.currentFeelsLikeTemp}/>
            <Weather currentWeatherType={this.props.currentWeatherType}/>


            </>

        )
    }
}

export default WeatherResults;