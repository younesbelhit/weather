import React, {Component,Fragment} from 'react';
import GoogleMapReact from 'google-map-react';

class Weather extends Component {

    render(){
        return(
            <Fragment>
                <p>{console.log(this.props.data.location)}</p>
            </Fragment>
        )
    }

}


export default Weather;