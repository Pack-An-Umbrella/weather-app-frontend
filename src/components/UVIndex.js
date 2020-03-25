import React from 'react';
import './WeatherResults.css';


class UVIndex extends React.Component {
    render() {
        return (
            <>
                
                <div className="icon sunny">
                    <div className="sun">
                        <div className="rays"></div>
                    </div>
                </div>
                <p>{this.props.currentMaxUVIndex}</p>
                <p>UV INDEX</p>



            </>

        )
    }
}

export default UVIndex;