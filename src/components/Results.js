import React, { Component } from 'react';
import fullBurger from '../assets/fullBurger.png';
import { Pulse } from 'react-preloading-component';

class Results extends Component {
    constructor() {
        super();
        this.state = {
            destination: '',
            detailsObject: {}
        }
    }
    destination = (destination) => {
        this.setState({
            destination: destination,
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
            return '-'
        }
    }
    makeBurgers = (burgerRating) => {
        const roundedNumber = Math.round(burgerRating)
        let burgerArray = []
        for (let i = 1; i <= 5; i++) {
            let burger;
            if (i <= roundedNumber) {
                burger = <img src={fullBurger} className="colored burgerStar" />

            } else {
                burger = <img className="burgerStar" src={fullBurger} />
            }
            burgerArray.push(burger)
        }
        return burgerArray;
    }
    getDirections = (address) => {
        this.props.getDestination(address)
        this.mapPreloader()
    }
    mapPreloader = () => {
        if (this.state.destination.length === 0) {
            return (
                 <Pulse
                    color="#005CAD"
                    size="40px"
                 />
            )
        }
    }
    getDetails = (placeId) => {
        const detailsArray = []
        for (let i = 0; i < this.props.restaurantDetails.length; i++) {
            let menu = ''
            if (this.props.restaurantDetails[i].menu === undefined) {
                menu = ''
            } else {
                menu = this.props.restaurantDetails[i].menu;
            }
            if (this.props.restaurantDetails[i].id === placeId) {
                detailsArray.push(<li className="phone">{this.props.restaurantDetails[i].phoneNum}</li>)
                detailsArray.push(<li className="website"><a href={this.props.restaurantDetails[i].menu}>Website</a></li>)
            }
        }
        return detailsArray
    }
    // displayPreloader = () => {
    //     if (this.props.length)
    // }
    render() {
        {if (this.props.restaurantsArray.length === 0 && this.props.userInput === false) {
            return (
                <div className="preloader">
                    <Pulse
                        color="#005CAD"
                        size="40px"
                    />
                </div>
            )
        } else {
            return (
                <div className="results">
                    {/* {this.displayPreloader} */}
                    {this.props.restaurantsArray.map((restaurant) => {
                        return (
                            <section className={restaurant.place_id} key={restaurant.place_id}>
                                <article className="clearfix">
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
                                        <li className="address">{restaurant.vicinity != undefined ? restaurant.vicinity : restaurant.formatted_address}</li>
                                        {this.getDetails(restaurant.place_id)}
    
                                    </ul>
                                    <button onClick={() => { restaurant.vicinity != undefined ? this.getDirections(restaurant.vicinity) : this.getDirections(restaurant.formatted_address) }}>Get Directions</button>
                                </article>
                            </section>
                        )
                    })}
                </div>
                
            );
        }


        }
    }
};

export default Results;