import React from 'react';
import WeatherComponent from './components/WeatherComponent';
// import logo from './logo.svg';
// import './App.css';

class App extends React.Component {

  state = {
    weatherParameters: {
            location: "location",
            feelsLikeTemperature: "9 C",
            temperature: "12 C",
            maxUVIndex: "Low Exposure",
            weatherType: "overcast",
            chanceOfRain: "28 %"
            
        }
    
}
 



render() {
  return (
    <div className="container">
    <h1>Pack an umbrella</h1>   
    <WeatherComponent allWeather={this.state.weatherParameters}/>

    </div>
  );
}




















  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <p>
  //         Edit <code>src/App.js</code> and save to reload.
  //       </p>
  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Learn React
  //       </a>
  //     </header>
  //   </div>
  // );
}

export default App;
