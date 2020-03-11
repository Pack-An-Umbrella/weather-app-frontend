import React from 'react';
import WeatherComponent from './components/WeatherComponent';

class App extends React.Component {

  state = {
    weatherParameters: {
            location: "location",
            feelsLikeTemperature: 9,
            temperature: 12,
            maxUVIndex: 6,
            humanReadableValue: 'Low exposure',
            weatherType: "overcast",
            weatherValue: 8,
            chanceOfRain: "28 %"
            
        }
    
}
 



uvRecommendation = (uvMax) => {
  if (uvMax >= 3) {
      return "sunglasses";
  } else {
      return "";
  }
} 

feelsLikeTemperature = (temperature) => {
  if (temperature <= 11) {
      return "a warm jacket";
  } else if (temperature >11 && temperature <19) {
      return "a light jacket";
  } else {
    return "";
  }
} 


generateRecommendation = (weatherForecast) => {
  let recommendations = [];


  recommendations.push(this.uvRecommendation(weatherForecast.maxUVIndex));
  recommendations.push("no jacket");
  recommendations.push("");
  
  return recommendations.filter(fil => fil.length > 0).join(", ");
}

render() {
  return (
    <div className="container">
    <h1>Pack an umbrella</h1>   
    <WeatherComponent allWeather={this.state.weatherParameters}/>
    {this.generateRecommendation(this.state.weatherParameters)}
    </div>
  );
}













}

export default App;
