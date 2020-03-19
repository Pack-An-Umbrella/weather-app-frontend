import React from 'react';

class Recommendations extends React.Component {
    render() {
        return (
            <>
    {/* {this.generateRecommendation(this.state.weatherParameters)} */} 
    {/* need to pass the function above as a prop */}
    <h2>RECOMMENDATIONS</h2>
    <p>YOU SHOULD PACK: {this.props.weatherRecommendationFunc}</p>

            </>

        )
    }
}

export default Recommendations;