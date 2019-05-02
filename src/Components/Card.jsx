import React, { Component } from 'react';
import './Card.css';

class Card extends Component {
    render() {
        return (
            <div className="Card">
                <img name={this.props.name} className={this.props.style} src={this.props.image} alt="Personnage" />
            </div>
        );
    }
}

export default Card;