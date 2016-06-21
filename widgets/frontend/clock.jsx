const React = require('react');

const Clock = React.createClass({
  getInitialState(){
    return {date: new Date()};
  },
  componentDidMount(){
    this.timer = setInterval(this.tick, 1000);
  },
  componentWillUnmount(){
    clearInterval(this.timer);
  },
  tick(){
    return this.setState({date: new Date()});
  },
  stringify(dateObj){
    return dateObj.toString();
  },
  render(){
    return <span id="timer">{this.stringify(this.state.date)}</span>;
  }

});

module.exports = Clock;
