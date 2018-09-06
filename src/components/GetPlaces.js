import React, { Component } from 'react';
import axios from 'axios';
import Qs from 'qs';

class GetPlaces extends Component {
    componentDidMount() {
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
                    location: `${this.props.lat} ${this.props.lon}`,
                    radius: 1000,
                    keyword: 'restaurants'
                },
                xmlToJSON: false
            }
        }).then(res => {
            console.log(res.data.results);
            console.log(this.props.lat)
        })
    }
    render() {
        return (
            null
        );
    }
};

export default GetPlaces;