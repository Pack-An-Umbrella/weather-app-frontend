import React from 'react';
import './App.css';
import TypeaheadForm from './TypeaheadForm';

class WeatherApp extends React.Component {

  render() {
    return (

      <div>
        <h1>
          <span role="img" aria-label="sunnycloud">🌦️</span>
          Pack An Umbrella
            <span role="img" aria-label="umbrella">☔</span>
          Typeahead Prototype
            </h1>
        <TypeaheadForm />

      </div>

    );
  }
}

export default WeatherApp;