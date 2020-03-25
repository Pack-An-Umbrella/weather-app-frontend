import React from 'react';

class FeelsLike extends React.Component {
    render() {
        return (
            <>
                <div className="icon flurries">
                    <div className="cloud"></div>
                    <div className="snow">
                        <div className="flake"></div>
                        <div className="flake"></div>
                    </div>
                </div>
                <p>{this.props.currentFeelsLikeTemp}°</p>
                <p>FEELS LIKE...</p>


            </>

        )
    }
}

export default FeelsLike;