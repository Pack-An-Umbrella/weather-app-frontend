import React from 'react';

class Recommendations extends React.Component {
    render() {
        return (
            <>
    {/* {this.generateRecommendation(this.state.weatherParameters)} */} 
    {/* need to pass the function above as a prop */}
    <h2>Recommendations</h2>
    <p>You should pack: {this.props.weatherRecommendationFunc}</p>

            </>

        )
    }
}

export default Recommendations;