import React from 'react';

class Recommendations extends React.Component {
    render() {
        return (
            <>
    {/* {this.generateRecommendation(this.state.weatherParameters)} */} 
    {/* need to pass the function above as a prop */}
    <h2 className="Recommendation">YOU SHOULD PACK: {this.props.weatherRecommendationFunc}</h2>

            </>

        )
    }
}

export default Recommendations;