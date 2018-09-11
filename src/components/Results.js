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
    getDetails = (placeId) => {
        const detailsArray = []
        for (let i = 0; i < this.props.restaurantDetails.length; i++) {
            let menu = this.props.restaurantDetails[i].menu;
            menu = menu.replace(/^.*:\/\//i, '').replace('www.', '')
            if (this.props.restaurantDetails[i].id === placeId) {
                detailsArray.push(<li>{this.props.restaurantDetails[i].phoneNum}</li>)
                detailsArray.push(<li><a href={this.props.restaurantDetails[i].menu}>{menu}</a></li>)
                    
            }
        }
        return detailsArray
    }
    
    render() {
        console.log(this.props.restaurantsArray)
        return (
            <div className="results">
                {this.props.restaurantsArray.map((restaurant) => {
                    return (
                        <section className={restaurant.place_id} key={restaurant.place_id}>
                            <article>
                                <h3>{restaurant.name}</h3>
                                <ul className="clearfix rating">
                                    <li>
                                        <figure className="clearfix rating">
                                            {this.makeBurgers(restaurant.rating, restaurant.place_id)}
                                        </figure>
                                    </li>
                                  
                                    <li className="price">{this.priceInDollars(restaurant.price_level)}</li>
                                </ul>
                                <ul>
                                    <li>{restaurant.vicinity != undefined ? restaurant.vicinity : restaurant.formatted_address}</li>
                                    {this.getDetails(restaurant.place_id)}
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