import React from 'react';


class ChanceOfRain extends React.Component {
    render() {
        return (
            <>
                <p>{this.props.currentChanceOfRain}%</p>
                <div className="icon rainy">
                    <div className="cloud"></div>
                    <div className="rain"></div>
                </div>
                <p>CHANCE OF RAIN</p>


            </>

        )
    }
}

export default ChanceOfRain;