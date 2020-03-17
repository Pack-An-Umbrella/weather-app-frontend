import React from 'react';
import HeaderLocation from './HeaderLocation';
import WeatherResults from './WeatherResults';
import Recommendations from './Recommendations';
import ClearButton from './ClearButton';

class Results extends React.Component {
    render() {

        return (
            <>
            <HeaderLocation currentLocation={this.props.currentLocation} />
            <WeatherResults />
            <Recommendations />
            <ClearButton />
        

            </>

        )
    }
}


export default Results;



