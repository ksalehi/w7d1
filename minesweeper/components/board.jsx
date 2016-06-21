const React = require('react');
const Minesweeper = require('../minesweeper');
const Tile = require('./tile');

const Board = React.createClass({

  render() {
    console.log(this.props.board);
    const drawBoard = this.props.board.grid.map( (row, rowIdx) => {
      console.log(row);
      return (
      <div>
        {row.map( (col, colIdx) => {
          return (<Tile tile={col} key={[rowIdx, colIdx]} updateGame={this.props.updateGame}/>)
      })}
      </div>
    );
    });
    return (<div className="board">{drawBoard}</div>);
  }
});

module.exports = Board;
