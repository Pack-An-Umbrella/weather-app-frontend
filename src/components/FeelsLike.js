import React from 'react';

class FeelsLike extends React.Component {
    render() {
        return (
            <>
            <p>Feels like {this.props.currentFeelsLikeTemp}</p>


            </>

        )
    }
}

export default FeelsLike;