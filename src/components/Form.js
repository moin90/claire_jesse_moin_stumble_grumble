import React, { Component } from 'react';
import axios from 'axios';
import Qs from 'qs';

class Form extends Component {
    constructor() {
        super();
        this.state = {
            originAddress: '',
            restaurantDetails: [],
        }
    }
    handleChange = (e) => {
        this.setState({
           originAddress: e.target.value 
        }, () => {
            this.props.getOriginAddress(this.state.originAddress)
            // console.log(this.state.originAddress)
        }) 
    }
    handleSubmit = (e) => {
        e.preventDefault()
        // console.log(this.state.originAddress)
        axios({
            method: 'GET',
            url: 'https://proxy.hackeryou.com',
            dataResponse: 'json',
            paramsSerializer: function (params) {
                return Qs.stringify(params, { arrayFormat: 'brackets' })
            },
            params: {
                reqUrl: 'https://maps.googleapis.com/maps/api/place/textsearch/json',
                params: {
                    key: 'AIzaSyBoRawmMG_0IPI25vStlhDGFifDwDcWZFs',
                    query: `${this.state.originAddress}`,
                    radius: 1000,
                    type: 'restaurant',
                    open_now: true,
                },
                xmlToJSON: false
            }
        }).then(res => {
            // console.log(res.data.results)
            this.props.getUserInput(res.data.results)
            this.setState({
                restaurants: res.data.results
            }, () => {
                    this.state.restaurants.map((restaurant) => {
                        // console.log(restaurant.place_id)
                        axios({
                            method: 'GET',
                            url: 'https://proxy.hackeryou.com',
                            dataResponse: 'json',
                            paramsSerializer: function (params) {
                                return Qs.stringify(params, { arrayFormat: 'brackets' })
                            },
                            params: {
                                reqUrl: 'https://maps.googleapis.com/maps/api/place/details/json',
                                params: {
                                    key: 'AIzaSyBoRawmMG_0IPI25vStlhDGFifDwDcWZFs',
                                    placeid: restaurant.place_id,
                                },
                                xmlToJSON: false
                            }
                        }).then(res => {
                            const detailObject = {}
                            detailObject.id = restaurant.place_id
                            detailObject.phoneNum = res.data.result.formatted_phone_number
                            detailObject.menu = res.data.result.website
                            const newState = this.state.restaurantDetails
                            newState.push(detailObject);
                            this.setState({
                                restaurantDetails: newState
                            }, () => {
                                // console.log(this.state.restaurantDetails)
                                this.props.setPlaceDetails(this.state.restaurantDetails)
                            })// closing set state
                        }) // then
                    })// this.state.restaurant 
                }) 
            })
            // console.log(this.state.restaurants)
            }
    render() {
        return (
            <form className="input hide" onSubmit={this.handleSubmit}>
                <label htmlFor="search"></label>
                <input type="search" id="search" onChange={this.handleChange}/>
                <input className="website" type="submit"/>
            </form>
        );
    }
};

export default Form;