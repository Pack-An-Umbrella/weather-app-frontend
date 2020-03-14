const fetch = require('node-fetch');

const location = "99183";
const locationAsHumanReadable = "Reading";

fetch(`https://eoz4lnddoa.execute-api.eu-west-2.amazonaws.com/dev/weather/${location}`)
.then(res => res.json())
.then(res => convertToState(res))
.then(res => console.log(res));
// console.log(fetch.then);


// weatherParameters: {
//     location: "location",
//     feelsLikeTemperature: 9,
//     temperature: 12,
//     maxUVIndex: 6,
//     humanReadableValue: 'Low exposure',
//     weatherType: "overcast",
//     weatherValue: 8,
//     chanceOfRain: 28
    
// }
const convertToState = (json) => {
    const weatherParameters = {
        "weatherParameters" : {
            "location": locationAsHumanReadable,
            "feelsLikeTemperature": json.nextThreeHours.feelsLikeTemperature.value,
            "temperature": json.nextThreeHours.temperature.value,
            "maxUVIndex": json.nextThreeHours.maxUVIndex.value,
            "humanReadableValue": json.nextThreeHours.maxUVIndex.humanText,
            "weatherType": json.nextThreeHours.weather.humanText,
            "weatherValue": json.nextThreeHours.weather.value,
            "chanceOfRain": json.nextThreeHours.precipationProbability.value
        }
    }

    return weatherParameters;
}







