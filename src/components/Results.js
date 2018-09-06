import React, { Component } from 'react';

class Results extends Component {

    // 

    getLocation = () => {
        console.log('you clicked me')
    }

    render() {
        console.log(this.props.restaurantsArray);

        return (
            <section>
                {this.props.restaurantsArray.map((restaurant) => {
                    console.log(restaurant.name);
                    return (
                        <article key={restaurant.place_id}>
                            <h3>{restaurant.name}</h3>
                            <ul>
                                <li>{restaurant.vicinity}</li>
                                <li>Rating: {restaurant.rating}/5</li>
                                <li>{restaurant.price_level}</li>
                            </ul>

                            <button onClick={this.getLocation}>Get Directions</button>

                        </article>
                    )
                })}

            </section>
        );
    }
};

export default Results;