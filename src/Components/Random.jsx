import React, { Component } from 'react';
import Card from './Card';
import './Random.css';

class Random extends Component {
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
                cards: cards.filter(x => x.type === 'MINION' && x.rarity === 'LEGENDARY')
            }))
    }

    getRandomInt = () => {
        let result = this.state.cards[Math.round(Math.random() * this.state.cards.length)];
        let deck = this.state.deck
        deck.push(result)
        this.setState({
            deck: deck
        })
    }

    getRandom = (nb) => {
        for (let i = 0; i < nb; i++) {
            console.log('coucou');
        }
    }

    /*  getCards = () => {
        let result = this.state.cards[Math.round(Math.random() * this.state.cards.length)];
        let deck = this.state.deck
        deck.push(result)
        this.setState({
            deck: deck
        })
     } */

    render() {
        return (
            <div className="Random">
                <button onClick={this.getRandomInt}>Jouer</button>
                <div className="deck">
                    {this.state.deck.map(x => <Card
                        key={x.id}
                        image={`https://art.hearthstonejson.com/v1/render/latest/frFR/256x/${x.id}.png`}
                    />)}
                </div>
            </div>
        );
    }
}

export default Random;