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
        console.log(e.target.value);
        this.setState({
           originAddress: e.target.value 
        })
        //, () => {
        //     this.props.getUserInput(this.state.originAddress)
        // })
        
    }
    handleSubmit = (e) => {
        console.log(this.state.originAddress)
        e.preventDefault()
        axios({
            method: 'GET',
            url: 'https://proxy.hackeryou.com',
            dataResponse: 'json',
            paramsSerializer: function (params) {
                return Qs.stringify(params, { arrayFormat: 'brackets' })
            },
            params: {
                reqUrl: 'https://maps.googleapis.com/maps/api/place/findplacefromtext/json',
                params: {
                    key: 'AIzaSyBoRawmMG_0IPI25vStlhDGFifDwDcWZFs',
                    input: '483 queen st west',
                    inputType: 'textquery',
                    radius: 1000,
                    // keyword: 'restaurant',
                    // opennow: true,
                },
                xmlToJSON: false
            }
        }).then(res => {
            console.log(res.data)
        })
    }
    render() {
        return (
            <form className="hide" onSubmit={this.handleSubmit}>
                <label htmlFor="search"></label>
                <input type="search" id="search" onChange={this.handleChange}/>
                <input type="submit"/>
            </form>
        );
    }
};

export default Form;