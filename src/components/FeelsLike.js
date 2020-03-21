import React from 'react';

class FeelsLike extends React.Component {
    render() {
        return (
            <>
            <p>{this.props.currentFeelsLikeTemp}</p>
            <p>FEELS LIKE...</p>


            </>

        )
    }
}

export default FeelsLike;