import React, {Component,Fragment} from 'react';
import WeatherAPI from './../API/WeatherAPI';
import Weather from './Weather';

class Form extends Component {


    state = {
        city: '',
        data: {},
        position: {}
    }

    handlechange = (e) => {
        this.setState({ city: e.target.value });
    }

    getWeather = (e) => {
        e.preventDefault();
        WeatherAPI.getWeatherByCity(this.state.city, (data) => {
            this.setState({ 
                data: data,
                position: {
                    lat: data.location.lat,
                    lng: data.location.lon,
                }
            });
        });    
    }

    render(){
        return(
            <Fragment>
                <p>
                    <input 
                        type="text" 
                        name="city" 
                        value={this.state.city} 
                        onChange={this.handlechange} 
                        placeholder="Enter Your City"/>
                </p>
                <p>
                    <button onClick={this.getWeather}>
                        Get Weather
                    </button>
                </p>
                <p>
                    <Weather 
                        data={this.state.data}
                        center={this.state.position}
                        zoom={14}
                    />
                </p>
            </Fragment>
        )
    }

}


export default Form;