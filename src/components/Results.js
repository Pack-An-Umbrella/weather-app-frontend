import React from 'react';
import HeaderLocation from './HeaderLocation';
import WeatherResults from './WeatherResults';
import Recommendations from './Recommendations';

class Results extends React.Component {
    render() {

        return (
            <>
            <HeaderLocation currentLocation={this.props.currentLocation}/>
            <h2>Weather forecast for the next 3 hours:</h2>
            <WeatherResults currentTemperature={this.props.currentTemperature} 
            currentFeelsLikeTemp={this.props.currentFeelsLikeTemp}
            currentMaxUVIndex={this.props.currentMaxUVIndex}
            currentWeatherType={this.props.currentWeatherType}
            currentWeatherValue={this.props.currentWeatherValue}
            currentChanceOfRain={this.props.currentChanceOfRain} />
            <Recommendations weatherRecommendationFunc={this.props.weatherRecommendationFunc} />
        

            </>

        )
    }
}


export default Results;



