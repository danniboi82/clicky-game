import React, { Component } from 'react';
import data from '../../gameImages.json';
import Thumbnail from '../Thumbnail/Thumbnail';
import { Col, Row, Container } from 'react-grid-system';
import Header from '../Header/Header';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';


class Gameboard extends Component {
    state = {
        score: 0,
        topScore: 0,
        data,
    }

    componentDidMount() {
        this.setState({ data: this.shuffleData(this.state.data) });
    }

    handleCorrectGuess = newData => {
        const { topScore, score } = this.state;
        const newScore = score + 1;
        const newTopScore = newScore > topScore ? newScore : topScore;
        this.setState({
            data: this.shuffleData(newData),
            score: newScore,
            topScore: newTopScore
        });
    };

    handleIncorrectGuess = data => {
        this.setState({
            data: this.resetData(data),
            score: 0
        });
    };

    resetData = data => {
        const resetData = data.map(item => ({ ...item, clicked: false }));
        return this.shuffleData(resetData);
    };

    shuffleData = data => {
        let i = data.length - 1;
        while (i > 0) {
            const j = Math.floor(Math.random() * (i + 1));
            const temp = data[i];
            data[i] = data[j];
            data[j] = temp;
            i--;
        }
        return data;
    };

    handleItemClick = id => {
        let guessedCorrectly = false;
        const newData = this.state.data.map(item => {
            const newItem = { ...item };
            if (newItem.id === id) {
                if (!newItem.clicked) {
                    newItem.clicked = true;
                    guessedCorrectly = true;
                }
            }
            return newItem;
        });
        guessedCorrectly
            ? this.handleCorrectGuess(newData)
            : this.handleIncorrectGuess(newData);
    };


    render() {
        const gameImage = this.state.data.map(simpsons => {
            return (
                <div style={{ display: 'inline-block' }}>
                    <Thumbnail
                        id={simpsons.id}
                        key={simpsons.id}
                        image={simpsons.image}
                        handleClick={this.handleItemClick}
                    />
                </div>
            )
        })
        return (
            <div>
                <Navbar />
                <Header score={this.state.score} topScore={this.state.topScore} />
                <Container >
                    {gameImage}
                </Container>
                <Footer/>
            </div>
        );
    }

}


export default Gameboard; 