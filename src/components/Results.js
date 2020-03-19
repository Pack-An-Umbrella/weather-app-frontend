import React from 'react';
import HeaderLocation from './HeaderLocation';
import WeatherResults from './WeatherResults';
import Recommendations from './Recommendations';
import './WeatherResults.css'

class Results extends React.Component {
    render() {

        return (
            <div className="Results text-center">
                <h1 className="HeaderLocation"><HeaderLocation currentLocation={this.props.currentLocation} /></h1>
                <h2 className="ForecastDescription">WEATHER FORECAST FOR THE NEXT 3 HOURS</h2>
                <WeatherResults currentTemperature={this.props.currentTemperature}
                    currentFeelsLikeTemp={this.props.currentFeelsLikeTemp}
                    currentMaxUVIndex={this.props.currentMaxUVIndex}
                    currentWeatherType={this.props.currentWeatherType}
                    currentWeatherValue={this.props.currentWeatherValue}
                    currentChanceOfRain={this.props.currentChanceOfRain} />
                <Recommendations weatherRecommendationFunc={this.props.weatherRecommendationFunc} />


            </div>

        )
    }
}


export default Results;



