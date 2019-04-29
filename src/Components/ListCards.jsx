import React, { Component } from 'react';
import Card from './Card';
import './ListCards.css';

class ListCards extends Component {
    constructor(props) {
        super(props)
        this.state = {
            cards: []
        }
    }

    componentDidMount() {
        fetch("https://api.hearthstonejson.com/v1/25770/frFR/cards.collectible.json")
            .then(res => res.json())
            .then(cards=>this.setState({cards: cards}))
    }

    render() {
        return (
            <div>
                {this.state.cards.map(x=><Card name={x.name}/>)}
            </div>
        );
    }
}

export default ListCards;