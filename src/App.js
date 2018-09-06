import React, { Component, Fragment } from 'react';
import './App.css';
import Footer from './components/Footer';
// import axios from 'axios';
// import Qs from 'qs';
import GetPlaces from './components/GetPlaces'


class App extends Component {
  constructor() {
    super();
    this.state = {
      restaurants: [],
      lat: '',
      lon: ''
    }
  }
  componentDidMount() {
    window.onload = () => {
      var startPos;
      var geoSuccess = (position) => {
        startPos = position;
        const lat = document.getElementById('startLat').innerHTML = startPos.coords.latitude;
        const lon = document.getElementById('startLon').innerHTML = startPos.coords.longitude;
        console.log(lat, lon)
        if (document.getElementById('startLat').innerHTML) {
          console.log('allowed')
          this.setState({
            lat: lat,
            lon: lon
          })
        } else {
          console.log('not allowed')
        }
      };
      navigator.geolocation.getCurrentPosition(geoSuccess);
    }
  }
  
  handleChange = (e) => {
    console.log(e.target.value)
    this.setState({
      restaurants: e.target.value,
    })
    const userInput = this.state.restaurants;
  }
  handleSubmit = (e) => {
    e.preventDefault();

  }
  render() {
    return (
      <Fragment>
        <h2>StumbleGrumble</h2>
        <main className="App">
          <form onSubmit={this.handleSubmit}>
            <input type="text" className="search" onChange={this.handleChange} value={this.state.restaurants}/>
            <input type="submit"/>
          </form>  
          <div id="startLat"></div>   
          <div id="startLon"></div> 
          <GetPlaces lat={this.state.lat} lon={this.state.lon}/>  
          
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
