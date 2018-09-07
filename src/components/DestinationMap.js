import React, { Component } from 'react';

// const destination = this.props.location.destination
class DestinationMap extends Component {
    formattedAddress = (destination) => {
        return destination.replace(' ', '%20')
    }
    render() {
        console.log(this.props.location.destination)
        return (

            <div class="mapouter"><div class="gmap_canvas"><iframe width="600" height="500" id="gmap_canvas" src={`https://maps.google.com/maps?q=${this.formattedAddress(this.props.location.destination)}&t=&z=13&ie=UTF8&iwloc=&output=embed`} frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe></div></div>

            
        );
    }
};

export default DestinationMap;