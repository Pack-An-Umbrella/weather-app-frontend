import React from 'react';


class ChanceOfRain extends React.Component {
    render() {
        return (
            <>
                <div className="icon rainy">
                    <div className="cloud"></div>
                    <div className="rain"></div>
                </div>
                <p>{this.props.currentChanceOfRain}%</p>
                <p>CHANCE OF RAIN</p>


            </>

        )
    }
}

export default ChanceOfRain;