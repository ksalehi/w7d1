const React = require('react');
const Minesweeper = require('../minesweeper');

const Tile = React.createClass({
  setTileText(){
    let adjacentBombCount = this.props.tile.adjacentBombCount();
    if (this.props.tile.explored) {
      this.tileText = adjacentBombCount;
    } else if (this.props.tile.bombed) {
      this.tileText = "B";
    }
    if (this.props.tile.flagged) {
      this.tileText = 'F';
    }

  },
  handleClick(event){
    let flagged = event.altKey;
    this.props.updateGame(this.props.tile, flagged);
  },
  render() {
    this.setTileText();
    return (<div className="tile" onClick={this.handleClick}>{this.tileText}</div>);
  }
});

module.exports = Tile;
