const fetch = require('node-fetch');

const location = "99183";
const locationAsHumanReadable = "Reading";

fetch(`https://eoz4lnddoa.execute-api.eu-west-2.amazonaws.com/dev/weather/${location}`)
.then(res => res.json())
.then(returnedJSon => convertToState(returnedJSon))
.then(res => console.log(res))
// .then (convertedState => this.setState ({
//     weathervariables: convertedState
//   })
//   )
.catch(function (error) {
    console.error(error);
    // this.setState({
        
    // })
});


const convertToState = (json) => {
    const weatherParameters = {
        "weatherParameters" : {
            "location": locationAsHumanReadable,
            "feelsLikeTemperature": json.nextThreeHours.feelsLikeTemperature.value,
            "temperature": json.nextThreeHours.temperature.value,
            "maxUVIndex": json.nextThreeHours.maxUVIndex.value,
            "humanReadableValue": json.nextThreeHours.maxUVIndex.humanReadableValue,
            "weatherType": json.nextThreeHours.weather.humanReadableValue,
            "weatherValue": json.nextThreeHours.weather.value,
            "chanceOfRain": json.nextThreeHours.precipationProbability.value
        }
    }

    return weatherParameters;
}



