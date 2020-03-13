import React from 'react';
import logo from './logo.svg';
import './App.css';
import MyForm from './MyForm';
// import typeahead_v2 from './typeahead_v2'

class App extends React.Component {

  // state = {
  //   weatherParameters: [
  //     {
  //       location: "location",
  //       feelsLikeTemperature: "9 C",
  //       temperature: "12 C",
  //       maxUVIndex: "Low Exposure",
  //       weatherType: "overcast",
  //       chanceOfRain: "28 %"

  //     }
  //   ]
  // }



  render() {
    return (
      <div className="container">
        <h1>Pack an umbrella - Typeahead</h1>
        <MyForm />

      </div>
    );
  }
}

export default App;
