import React, { Component } from 'react';
import Card from './Card';
import Modal from 'react-modal';
import './Deck.css'

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)'
  }
};

Modal.setAppElement('#root')

class Deck extends Component {
  constructor() {
    super();

    this.state = {
      modalIsOpen: false,
      deck: [],
      cards: [],
      random: []
    };
  }

  componentDidMount() {
    fetch("https://api.hearthstonejson.com/v1/25770/frFR/cards.collectible.json")
      .then(res => res.json())
      .then(cards => this.setState({
        cards: cards.filter(x => x.type === 'MINION' && x.rarity === 'LEGENDARY')
      }));
    
  }

  getRandomInt = () => {
    let random = this.state.random
    for (let i = 0; i < 3; i++) {
      let result = this.state.cards[Math.floor(Math.random() * this.state.cards.length)];
      random.push(result)
    }
    this.setState({
      random: random
    })
  }

  openModal = () => {
    this.setState({ modalIsOpen: true });
  }

  afterOpenModal = () => {
    this.getRandomInt()
  }

  closeModal = () => {
    this.setState({
      modalIsOpen: false,
      random: []
    });
  }

  pickCard = (event) => {
    let cardResult = this.state.random[event.target.name];
    let card = this.state.deck
    card.push(cardResult)
    this.setState({
      deck: card
    })
  }

  render() {
    return (
      <div className="Deck">
        <button onClick={this.openModal}>Jouer</button>
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Création deck"
        >
          <h2>Choisis une carte</h2>
          <div className="deck">
            {this.state.random.map((x, index) =>
              <button key={x.id} onClick={this.pickCard}>
                <Card
                  name={index}
                  image={`https://art.hearthstonejson.com/v1/render/latest/frFR/256x/${x.id}.png`}
                />
              </button>)}
          </div>
          <button onClick={this.closeModal}>Valider</button>
        </Modal>
        <div className="deck-definitive">
          {this.state.deck.map((x, index) => <Card
            image={`https://art.hearthstonejson.com/v1/render/latest/frFR/256x/${x.id}.png`}
            style={`image-character${index}`}
          />)}
        </div>
      </div>
    );
  }
}

export default Deck