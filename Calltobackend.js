const fetch = require('node-fetch');

const location = "99183";
const locationAsHumanReadable = "Reading";

fetch(`https://eoz4lnddoa.execute-api.eu-west-2.amazonaws.com/dev/weather/${location}`)
.then(res => res.json())
.then(res => convertToState(res))
.then(res => console.log(res));


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


// set state on submit 


// componentDidMount = () => {
//     console.log("calling backend server to retrieve state");
//     axios.get('https://l9d6i1g2ii.execute-api.eu-west-2.amazonaws.com/dev/tasks')
//      .then(response => {
//        //handle success
//        console.log(response.data.tasks);
//        this.setState({
//          incompleteTasks: response.data.tasks
//        })
//      })
//       //handle errors
//      .catch(function (error) {
//        console.error(error);
//      });
//   }




