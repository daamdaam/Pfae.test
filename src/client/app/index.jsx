import ReactDOM from 'react-dom';
import React, { Component } from 'react';
import Request from 'react-http-request';
import Axios from 'axios';

let jsonData = {};

const data = Axios.get('https://www.propertyfinder.ae/en/find-broker/ajax/search?page=1').then((jsondata)=>jsonData = jsondata);


const CarouselBlock = React.createClass({

    getInitialState() {
        return {
            jsonData: null
        };
    },

    componentDidMount() {
        Axios.get('https://www.propertyfinder.ae/en/find-broker/ajax/search?page=1')
        .then(res => {
            const jsonData = res;
            this.setState({ jsonData });
        });
    },

    render() {

        var carouselblock = {};

            let listItems;
            let  slideToPoints = [];
            let slideToLinks = [];
            if (this.state.jsonData !== null) {
                slideToLinks = (item, index, first) => {
                    console.log('fired ', index.length, first.length);
                    return slideToPoints.push(<li key={index.id} data-target='#carousel-example-generic' data-slide-to={index} className={first}></li>);
                }

                listItems = this.state.jsonData.data.data.map((item, index) => {
                    let first = index==0?'active carousel-item':'carousel-item';

                    if (index.length !== 'undefined' && first.length !== 'undefined') {
                        slideToLinks(item, index, first);
                    }
                    

                    return (
                        <div key={index} className={first} >
                            <img alt={item.name} src={item.links.logo} />
                        </div>
                    )
                });
                
                console.log(slideToLinks());
            }

            return (
                <div id="carousel-example-generic" className="carousel slide" data-ride="carousel">
                    <ol className="carousel-indicators">{jsonData.statusCode}
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
            )

    }
});


ReactDOM.render(<CarouselBlock />, document.getElementById('app'));
