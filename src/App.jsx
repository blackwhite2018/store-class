import React, { Component } from 'react';
import ShopItemClass from './ShopItemClass';
import './css/main.css';

export default class App extends Component {
    state = {
        item: {
            brand: 'Tiger of Sweden',
            title: 'Leonard coat',
            description: 'Minimalistic coat in cotton-blend',
            descriptionFull: 'Men\'s minimalistic overcoat in cotton-blend. Features a stand-up collar, concealed front closure and single back vent. Slim fit with clean, straight shape. Above-knee length.',
            price: 399,
            currency: '£'
        }
    };

    render() {
        return (
            <div className="container">
                <div className="background-element"></div>
                <div className="highlight-window">
                    <div className='highlight-overlay'></div>
                </div>
                <div className="window">
                    <ShopItemClass item={ this.state.item } />
                </div>
            </div>
        );
    }
};

