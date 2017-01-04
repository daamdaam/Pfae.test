import ReactDOM from 'react-dom';
import React, { Component } from 'react';
import Request from 'react-http-request';
import Axios from 'axios';
import NavigationBlock from './NavigationComponent.jsx';

const CarouselBlock = React.createClass({

    getInitialState() {
        return {
            jsonData: null,
            jsonDataNav: null
        };
    },

    componentDidMount() {
        //Axios.get('https://www.propertyfinder.ae/en/find-broker/ajax/search?page=1')
        Axios.get('propertyFinder.json')
            .then(res => {
                const jsonData = res.data.data;
                const jsonDataNav = res.data.data;
                this.setState({ jsonData });
                this.setState({ jsonDataNav });
            });
    },

    onFilter(e) {
        this.setState({ jsonData: this.state.jsonDataNav });

        if (this.state.jsonData !== null) {
            let jsonDataCopy = this.state.jsonDataNav.slice();
            const jsonData = this.state.jsonData

            if (e.target.value !== 'All') {
                this.setState({ jsonData: jsonDataCopy.filter(item => item.location == e.target.value) });
            }
        }

    },

    render() {

        let listItems;
        let slideToPoints = [];

        if (this.state.jsonData !== null) {

            const slideToLinks = (item, index, first) => {
                if (typeof item !== 'undefined')
                    return slideToPoints.push(<li key={item.id} data-target='#carousel-example-generic' data-slide-to={index} className={first}></li>);
            }

            listItems = this.state.jsonData.map((item, index) => {
                const first = index == 0 ? ' active' : '';
                const carouselClass = 'carousel-item' + first;

                if (index.length !== 'undefined' && first.length !== 'undefined') {
                    slideToLinks(item, index, first);
                }

                return (
                    <div key={index} className={carouselClass} >
                        <h1>{item.location}</h1>
                        <p>{item.description}</p>
                        <img alt={item.name} src={item.links.logo} />
                    </div>
                )
            });

        }

        return (
            <div>
                <NavigationBlock jsonDataNav={this.state.jsonDataNav} onFilter={this.onFilter} />
                <div id="carousel-example-generic" className="carousel slide" data-ride="carousel">
                    <ol className="carousel-indicators">
                        {slideToPoints}
                    </ol>
                    <div className='carousel-inner' role='listbox'>
                        {listItems}
                    </div>
                    <a className="left carousel-control" href="#carousel-example-generic" role="button" data-slide="prev">
                        <span className="icon-prev" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="right carousel-control" href="#carousel-example-generic" role="button" data-slide="next">
                        <span className="icon-next" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </a>
                </div>
            </div>
        )

    }
});

module.exports = CarouselBlock;