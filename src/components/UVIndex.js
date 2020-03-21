import React from 'react';
import './WeatherResults.css';


class UVIndex extends React.Component {
    render() {
        return (
            <>
                <p>{this.props.currentMaxUVIndex}</p>
                <div className="icon sunny">
                    <div className="sun">
                        <div className="rays"></div>
                    </div>
                </div>
                <p>UV INDEX</p>



            </>

        )
    }
}

export default UVIndex;