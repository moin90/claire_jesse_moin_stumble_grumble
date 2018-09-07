import React, { Component, Fragment } from 'react';
import './App.css';
import Footer from './components/Footer';
import axios from 'axios';
import Qs from 'qs';
import Results from './components/Results';


class App extends Component {
  constructor() {
    super();
    this.state = {
      restaurants: [],
      lat: '',
      lon: '',
      destination: ''

    }
  }
  componentDidMount() {
    window.onload = () => {
      var startPos;
      var geoSuccess = (position) => {
        startPos = position;
        const lat = document.getElementById('startLat').innerHTML = startPos.coords.latitude;
        const lon = document.getElementById('startLon').innerHTML = startPos.coords.longitude;
        if (lat != null && lon != null) {
<<<<<<< HEAD
         
    axios({
      method: 'GET',
      url: 'https://proxy.hackeryou.com',
      dataResponse: 'json',
      paramsSerializer: function (params) {
        return Qs.stringify(params, { arrayFormat: 'brackets' })
      },
      params: {
        reqUrl: 'https://maps.googleapis.com/maps/api/place/nearbysearch/json',
        params: {
          key: 'AIzaSyBoRawmMG_0IPI25vStlhDGFifDwDcWZFs',
          location: `${lat} ${lon}`,
          radius: 1000,
          keyword: 'restaurant',
          opennow: true
        },
        xmlToJSON: false
      }
    }).then(res => {
      console.log(res.data.results);
    })
          
=======
          axios({
            method: 'GET',
            url: 'https://proxy.hackeryou.com',
            dataResponse: 'json',
            paramsSerializer: function (params) {
              return Qs.stringify(params, { arrayFormat: 'brackets' })
            },
            params: {
              reqUrl: 'https://maps.googleapis.com/maps/api/place/nearbysearch/json',
              params: {
                key: 'AIzaSyBoRawmMG_0IPI25vStlhDGFifDwDcWZFs',
                location: `${lat} ${lon}`,
                radius: 1000,
                keyword: 'restaurant',
                opennow: true,
              },
              xmlToJSON: false
            }

          }).then(res => {
            // console.log(res.data.results);
            this.setState ({
              restaurants: res.data.results,
              lat: lat,
              lon: lon
            })
          })
>>>>>>> bb3d59474cdc2eb9a9d845ded77021c52c8eaaf3
        }
      };
      navigator.geolocation.getCurrentPosition(geoSuccess);
    };
  }
  getDestination = (destination) => {
    this.setState({
      destination: destination
    }, () => {
      axios({
        method: 'GET',
        url: 'https://proxy.hackeryou.com',
        dataResponse: 'json',
        paramsSerializer: function (params) {
          return Qs.stringify(params, { arrayFormat: 'brackets' })
        },
        params: {
          reqUrl: 'https://maps.googleapis.com/maps/api/directions/json?',
          params: {
            key: 'AIzaSyBoRawmMG_0IPI25vStlhDGFifDwDcWZFs',
            origin: `${this.state.lat} ${this.state.lon}`,
            destination: `${this.state.destination}`,
            mode: 'walking'
          },
          xmlToJSON: false
        }
      }).then(res => {
        console.log(res.data);
        // console.log(res);
      })

      // console.log(destination);
    })
    
    
  }


  // handleSubmit = (e) => {
  //   e.preventDefault();
  // }


  render() {
    return (
      <Fragment>
        <h2>StumbleGrumble</h2>
        <main className="App">
          <form onSubmit={this.handleSubmit}>
            {/* <input type="text" className="search" onChange={this.handleChange} value={this.state.restaurants}/> */}
            <input type="submit"/>
          </form>
          <Results restaurantsArray={this.state.restaurants} getDestination={this.getDestination} />
          <div id="startLat"></div>   
          <div id="startLon"></div>  
          
        </main>
        <Footer/>

      </Fragment>
    );
  }
}

export default App;

// on get started, app will prompt user to allow location services (geolocation api)
// once allowed, the results will display the resautrants within a default 1km radius (the user can also search by rating, price, etc.)
// if they decline geolocation, create an array of funny responses to cycle through "well, do you want to eat?"
// OOOOR if the decline, displya the form so they acn type in their location
// on each card, the restaurant name, hours, phone number, menu, distance, and 'get directions' button is displayed
// the user can change the radius at the top if they want
// when get direction is clicked, the directions API loads and routes us to our Directions component
// the directions component takes the user's location from the geolocation api and the address from the places api and displays a route on a map
// add preloader!!
