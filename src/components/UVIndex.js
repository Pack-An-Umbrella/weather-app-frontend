import React from 'react';
import './WeatherResults.css';
import { FiSun } from 'react-icons/fi';


class UVIndex extends React.Component {
    render() {
        return (
            <>

                <p>{this.props.currentMaxUVIndex}</p>
                <p className="UVicon"><FiSun /></p>
                <p>UV INDEX</p>

                

            </>

        )
    }
}

export default UVIndex;