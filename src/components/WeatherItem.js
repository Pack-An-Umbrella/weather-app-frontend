import React from 'react';


class WeatherItem extends React.Component {
    
    render() {
        return (
            <li>
                {this.props.weatherKey}: {this.props.weatherValue}
            </li>
        )
    } 

}


export default WeatherItem;