import React from 'react';
// import WeatherComponent from './components/WeatherComponent';
import Header from './Header.js';
import LocationSelection from './components/LocationSelection';
import Results from './components/Results';

class App extends React.Component {

  //when we load the app, our user sees the header element, the location selection element and a submit button


  state = {


    // weatherParameters: {
    //         location: "location",
    //         feelsLikeTemperature: 9,
    //         temperature: 12,
    //         maxUVIndex: 6,
    //         humanReadableValue: 'Low exposure',
    //         weatherType: "overcast",
    //         weatherValue: 8,
    //         chanceOfRain: 28

  }


  firstLoadComponents = () => {

    if (this.state) {
      return (<>
        <Header /> (
        <LocationSelection getIdProps={this.getId} />
      </>);
    } else {
      return (
        <>
          <Results />
        </>
      );
    }

   

    //   //if empty - load  
    //   if (this.state = {}) {
    //     return (
    //     <>
    //     <Header />
    //     <LocationSelection />
    //     </> )
    //     } else {
    //       return <Results />
    //     }

    // }

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
