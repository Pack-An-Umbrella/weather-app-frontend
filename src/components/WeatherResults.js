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
            <UVIndex currentFeelsLikeTemp={this.props.currentFeelsLikeTemp}/>
            <ChanceOfRain currentFeelsLikeTemp={this.props.currentFeelsLikeTemp}/>
            <Weather currentFeelsLikeTemp={this.props.currentFeelsLikeTemp}/>


            </>

        )
    }
}

export default WeatherResults;