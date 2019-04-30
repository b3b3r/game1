import React, { Component } from 'react';
import './Card.css';

class Card extends Component {
    render() {
        return (
            <div className="Card">
                <img className="image-character" src={this.props.image} alt="Personnage" />
            </div>
        );
    }
}

export default Card;