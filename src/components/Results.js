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
                    // console.log(restaurant.place_id);
                    return (
                        <section key={restaurant.place_id}>
                            <article>
                                <h3>{restaurant.name}</h3>
                                <ul>
                                    <li>{restaurant.vicinity}</li>
                                    <li>Rating: {restaurant.rating}/5</li>
                                    <li>{this.priceInDollars(restaurant.price_level)}</li>
                                </ul>
    
                                <button onClick={() => {this.getDirections(restaurant.vicinity)}}>Get Directions</button>
                            </article>

                        </section>
                


                    )
                })}

            </section>
        );
    }
};

export default Results;