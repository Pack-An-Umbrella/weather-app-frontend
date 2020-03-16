import React from 'react';
import HeaderLocation from './HeaderLocation';
import WeatherResults from './WeatherResults';
import Recommendations from './Recommendations';


class Results extends React.Component {
    render() {
        return (
            <>
            <HeaderLocation />
            <WeatherResults />
            <Recommendations />
            </>

        )
    }
}


export default Results;



