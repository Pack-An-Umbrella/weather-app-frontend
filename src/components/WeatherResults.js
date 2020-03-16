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
            <Temperature />
            <FeelsLike />
            <UVIndex />
            <ChanceOfRain />
            <Weather />


            </>

        )
    }
}

export default WeatherResults;