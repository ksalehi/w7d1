const React = require('react');
const Board = require('./board');
const Minesweeper = require('../minesweeper');

const Game = React.createClass({
  getInitialState(){
    return {board: new Minesweeper.Board(10,10)};
  },
  updateGame(tile, flagged){
    if (flagged) {
      tile.toggleFlag();
    } else {
      tile.explore();
    }
    this.setState({ board: this.state.board });
  },
  render(){
    if (this.state.board.won()) {
      alert("You WIN!!!");
    } else if (this.state.board.lost()) {
      alert("You LOSE!");
    }
    return(<Board board={this.state.board} updateGame={this.updateGame}/>);
  }
});

module.exports = Game;
