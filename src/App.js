import React from 'react';
// import WeatherComponent from './components/WeatherComponent';
import Header from './Header.js';
import LocationSelection from './components/LocationSelection';
import Results from './components/Results';

class App extends React.Component {


  state = {

    weatherVariables : {}
    // weatherV: {
    //         location: "location",
    //         feelsLikeTemperature: 9,
    //         temperature: 12,
    //         maxUVIndex: 6,
    //         humanReadableValue: 'Low exposure',
    //         weatherType: "overcast",
    //         weatherValue: 8,
    //         chanceOfRain: 28

  }

  onLocationSubmit = (location) => {
    //use location to call backend
    console.log(location);
    fetch(`https://eoz4lnddoa.execute-api.eu-west-2.amazonaws.com/dev/weather/${this.getId(location)}`)
      .then(res => res.json())
      .then(returnedJSon => this.convertToState(returnedJSon, location))
      .then (convertedState => {
        this.setState ({
          weatherVariables: convertedState
        })
      })
      .catch(function (error) {
          console.error(error);
          // this.setState({
          //   weatherVariables: {}
          // })
      });

  }

 convertToState = (json, locationAsHumanReadable) => {
    const weatherParameters = {
        "weatherParameters" : {
            "location": locationAsHumanReadable,
            "feelsLikeTemperature": json.nextThreeHours.feelsLikeTemperature.value,
            "temperature": json.nextThreeHours.temperature.value,
            "maxUVIndex": json.nextThreeHours.maxUVIndex.value,
            "humanReadableValue": json.nextThreeHours.maxUVIndex.humanReadableValue,
            "weatherType": json.nextThreeHours.weather.humanReadableValue,
            "weatherValue": json.nextThreeHours.weather.value,
            "chanceOfRain": json.nextThreeHours.precipationProbability.value
        }
    }

    return weatherParameters;
}

  firstLoadComponents = () => {

    if (this.state) {} 

    if (Object.keys(this.state.weatherVariables).length === 0) {
      return (<>
        <Header /> (
        <LocationSelection locationSubmit={this.onLocationSubmit}/>
      </>);
    } else {
      return (
        <>
          <Results />
        </>
      );
    }
  }

  getId = (locationId) => {
    const locationMapping = {
      'London': '352409',
      'Salford': '353339',
      'Glasgow': '351582',
      'Leicester': '310011',
      'Cardiff': '371381',
      'Belfast': '350347'
    }
    return locationMapping[locationId];

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
    } else if (temperature > 11 && temperature < 19) {
      return "a light jacket";
    } else {
      return "";
    }
  }


  chanceOfRain = (chance) => {
    if (chance > 25) {
      return "an umbrella";
    } else {
      return "";
    }
  }


  generateRecommendation = (weatherForecast) => {
    let recommendations = [];

    recommendations.push(this.uvRecommendation(weatherForecast.maxUVIndex));
    recommendations.push(this.feelsLikeTemperature(weatherForecast.feelsLikeTemperature));
    recommendations.push(this.chanceOfRain(weatherForecast.chanceOfRain));

    return recommendations.filter(fil => fil.length > 0).join(", ");
  }

  render() {
    return (
      <div className="container">
        {this.firstLoadComponents()}
        {/* <Header />
    <LocationSelection />
    <Results />  */}
        {/* <WeatherComponent allWeather={this.state.weatherParameters}/> */}
        {/* {this.generateRecommendation(this.state.weatherParameters)}  */}

      </div>
    );
  }

}



export default App;
