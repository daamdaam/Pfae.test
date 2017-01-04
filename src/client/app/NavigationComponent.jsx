import ReactDOM from 'react-dom';
import React, { Component } from 'react';
import Request from 'react-http-request';
import Axios from 'axios';
import CarouselBlock from './CarouselComponent.jsx';

let jsonDataLocation = {};   
let selectedCity = {};

const NavigationBlock = React.createClass({

    filterItems(e) {
        this.setState({selectedCity: e.target.value})
        this.props.onFilter(e)
    },

    getInitialState() {
        return {
            selectedCity: null
        };
    },

    componentDidMount() {
            const selectedCity = null;
    },

    render() {
        let navLocationNames = [];

        if (this.props.jsonDataNav !== null) {

            jsonDataLocation = this.props.jsonDataNav
            .map(item => item.location)
            .filter((elem, pos, arr) => {
                return arr.indexOf(elem) == pos;
            })
            .forEach((item, index) => {
                navLocationNames.push(
                    <li key={index}>
                        <button value={item} onClick={this.filterItems}>
                            {item}
                        </button>
                    </li>
                )
            }
            );

        }

        return (
            <div>
                <nav>
                    <ul>
                        {navLocationNames}
                        <li>
                            <button value='All' onClick={this.filterItems}>
                                All
                            </button>
                        </li>
                    </ul>
                </nav>
                <p>
                    you have selected <span className='selectedCity'>{this.state.selectedCity}</span>
                </p>
            </div>
        )

    }
});

export default NavigationBlock;
