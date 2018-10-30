class WeatherAPI {


    static getWeatherByCity(city, callback) {
        fetch(`http://api.apixu.com/v1/current.json?key=bc5338dbbb404901bf8164217181910&q=${city}`)
            .then( async data => data.json() )
            .then( async data => callback(data) )
            .catch( error => console.log(error) );
    } 


}

export default WeatherAPI;