import React, { Component } from 'react';
import fullBurger from '../assets/fullBurger.png';
// import halfBurger from '../assets/halfBurger.png';
import axios from 'axios';
import Qs from 'qs';

class Results extends Component {
    constructor(){
        super();
        this.state = {
            destination:'',
            detailsObject: {}
        }
    }
    destination = (destination) => {
        this.setState({
            destination:destination,
        })
    }
        
    getLocation = () => {
        console.log('you clicked me')
    }
    priceInDollars = (price) => {
        let dollarString = '$'
        if (price > 0) {
            return dollarString.repeat(price);
        } else {
            return 'Price: N/A'
        }
    }
    makeBurgers = (burgerRating) => {
        // console.log(burgerRating)
        const roundedNumber = Math.round(burgerRating)
        let burgerArray = []
        // empty array make
        // for loop that creates 5 image elements with burgers to push to array
        for(let i = 1; i <= 5; i++) {
            let burger;
            if( i <= roundedNumber ){
               burger = <img src={fullBurger} className="colored"/>

            } else {
                burger = <img src={fullBurger}/>
            }
            burgerArray.push(burger)
        }
        return burgerArray;
    }
    getDirections = (address) => {
        this.props.getDestination(address)
    }
    
    render() {
        return (
            <div className="results">
                {this.props.restaurantsArray.map((restaurant) => {

                    // console.log(restaurant.name);
                    return (
                        <section className={restaurant.place_id} key={restaurant.place_id}>
                            <article>
                                <h3>{restaurant.name}</h3>
                                <ul>
                                    <li>{restaurant.vicinity != undefined ? restaurant.vicinity : restaurant.formatted_address}</li>
                                    <li>
                                        <figure className="clearfix">
                                            {this.makeBurgers(restaurant.rating, restaurant.place_id)}
                                        </figure>
                                    </li>
                                    <li>{this.priceInDollars(restaurant.price_level)}</li>
                                </ul>
                                <ul>
                                    {this.props.restaurantDetails.map((details) => {
                                        console.log(details.id);
                                    })}
                                </ul>
                                <button onClick={() => {restaurant.vicinity != undefined ? this.getDirections(restaurant.vicinity) : this.getDirections(restaurant.formatted_address)}}>Get Directions</button>
    
    
                            </article>
                

                        </section>
                    )
                })}

            </div>
        );
    }
};

export default Results;