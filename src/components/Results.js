import React, { Component, Fragment } from 'react';

class Results extends Component {
    render() {
        console.log(this.props.restaurantsArray);
        return (
            <section>
                {this.props.restaurantsArray.map((restaurant) => {
                    console.log(restaurant.name);
                    <article>
                        <h3>{restaurant.name}</h3>
                            <ul>
                                <li>{restaurant.rating}</li>
                                <li>{restaurant.vicinity}</li>
                        </ul>
                    </article>

                })}

            </section>
        );
    }
};

export default Results;