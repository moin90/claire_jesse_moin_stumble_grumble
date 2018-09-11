import React, { Component } from 'react';
import axios from 'axios';
import Qs from 'qs';

class Form extends Component {
    constructor() {
        super();
        this.state = {
            originAddress: ''
        }
    }
    handleChange = (e) => {
        this.setState({
           originAddress: e.target.value 
        }, () => {
            this.props.getOriginAddress(this.state.originAddress)
            console.log(this.state.originAddress)
        }) 
    }
    handleSubmit = (e) => {
        e.preventDefault()
        console.log(this.state.originAddress)
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
            console.log(res.data.results)
            this.props.getUserInput(res.data.results)
            })
    }
    render() {
        return (
            <section className="form">
                <form className="input hide" onSubmit={this.handleSubmit}>
                    <label htmlFor="search"></label>
                    <input type="search" id="search" placeholder="Enter your location" onChange={this.handleChange}/>
                    <input type="submit" value="I'M STARVING!"/>
                </form>
            </section>
        );
    }
};

export default Form;