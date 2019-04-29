import React, { Component } from 'react';
import './Card.css';

class Card extends Component {
    render() {
        return (
            <div className="Card">
                <div>
                    <img className="image-character" src={this.props.image} alt="Personnage" />
                </div>
                <div className="description-character">
                    <h2 className="title-character">{this.props.name}</h2>
                    <div className="perks-character">
                        <p className="attack">{this.props.attack}</p>
                        <p className="defense">{this.props.health}</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Card;