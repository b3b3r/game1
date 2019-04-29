import React, { Component } from 'react';
import './Card.css';

class Card extends Component {
    render() {
        return (
            <div className="Card">
                <div>
                    <img className="image-character" src="https://via.placeholder.com/150" alt="Personnage" />
                </div>
                <div className="description-character">
                    <h2 className="title-character">Nom carte</h2>
                    <p className="detail-character">Description</p>
                    <div className="perks-character">
                        <p className="attack">Attaque</p>
                        <p className="defense">Défense</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Card;