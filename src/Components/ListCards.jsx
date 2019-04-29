import React, { Component } from 'react';
import Card from './Card';
import './ListCards.css';

class ListCards extends Component {
    constructor(props) {
        super(props)
        this.state = {
            cards: [],
            random: [],
            deck: []
        }
    }

    componentDidMount() {
        fetch("https://api.hearthstonejson.com/v1/25770/frFR/cards.collectible.json")
            .then(res => res.json())
            .then(cards => this.setState({
                cards: cards.filter(x=>x.type==='MINION')
            }))
    }

    getRandomInt = () => {
        this.setState({
            deck: this.state.cards[Math.round(Math.random() * this.state.cards.length)]
        })
    }

    render() {
        return (
            <div className="ListCards">
                <button onClick={this.getRandomInt}>Random</button>
                <p>{this.state.cards.name}</p>
                <Card 
                name={this.state.deck.name}
                image={`https://art.hearthstonejson.com/v1/render/latest/frFR/256x/${this.state.deck.id}.png`}
                attack={this.state.deck.attack}
                health={this.state.deck.health}
                />
            </div>
        );
    }
}

export default ListCards;