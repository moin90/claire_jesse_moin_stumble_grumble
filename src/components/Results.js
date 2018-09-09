import React, { Component } from 'react';

class Results extends Component {
    constructor(){
        super();
        this.state = {
            destination:''
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
    getDirections = (address) => {
        console.log(this.props);
        this.props.getDestination(address)
    }
    render() {
        return (
            <section>
                {this.props.restaurantsArray.map((restaurant) => {
                    // console.log(restaurant.name);
                    return (
                        <section key={restaurant.place_id}>
                            <article>
                                <h3>{restaurant.name}</h3>
                                <ul>
                                    <li>{restaurant.vicinity != undefined ? restaurant.vicinity : restaurant.formatted_address}</li>
                                    <li>Rating: {restaurant.rating}/5</li>
                                    <li>{this.priceInDollars(restaurant.price_level)}</li>
                                </ul>
    
                                <button onClick={() => {restaurant.vicinity != undefined ? this.getDirections(restaurant.vicinity) : this.getDirections(restaurant.formatted_address)}}>Get Directions</button>
    
    
                            </article>
                

                        </section>
                    )
                })}

            </section>
        );
    }
};

export default Results;