import React from 'react';

class FeelsLike extends React.Component {
    render() {
        return (
            <>
                <p>{this.props.currentFeelsLikeTemp}°</p>
                <div className="icon flurries">
                    <div className="cloud"></div>
                    <div className="snow">
                        <div className="flake"></div>
                        <div className="flake"></div>
                    </div>
                </div>
                <p>FEELS LIKE...</p>


            </>

        )
    }
}

export default FeelsLike;