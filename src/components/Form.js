import React, { Component } from 'react';

class Form extends Component {
    handleChange = (e) => {
        console.log(e.target.value)
    }
    handleSubmit = (e) => {
        e.preventDefault()
    }
    render() {
        return (
            <form className='hide' id="form" onSubmit={this.handleSubmit}>
                <label htmlFor="search"></label>
                <input type="search" id="search" onChange={this.handleChange}/>
                <input type="submit"/>
            </form>
        );
    }
};

export default Form;