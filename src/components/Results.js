import React, { Component } from 'react';
import fullBurger from '../assets/fullBurger.png';

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
        const roundedNumber = Math.round(burgerRating)
        let burgerArray = []
        for(let i = 1; i <= 5; i++) {
            let burger;
            if( i <= roundedNumber ){
               burger = <img src={fullBurger} className="colored burgerStar"/>

            } else {
                burger = <img className="burgerStar" src={fullBurger}/>
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
            let menu = ''
            if (this.props.restaurantDetails[i].menu === undefined) {
                menu = ''
            } else {
                menu = this.props.restaurantDetails[i].menu;
                // menu = menu.replace(/^.*:\/\//i, '').replace('www.', '')
            }
            if (this.props.restaurantDetails[i].id === placeId) {
                detailsArray.push(<li>{this.props.restaurantDetails[i].phoneNum}</li>)
                detailsArray.push(<li><a href={this.props.restaurantDetails[i].menu}>Browse the website</a></li>)
            }
        }
        return detailsArray
    }
    
    render() {
        return (
            <div className="results">
                {this.props.restaurantsArray.map((restaurant) => {
                    return (
                        <section className={restaurant.place_id} key={restaurant.place_id}>
                            <article>
                                <h3>{restaurant.name}</h3>
                                <ul className="clearfix rating">
                                    <li>
                                        <figure className="clearfix burger">
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