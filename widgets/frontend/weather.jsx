const React = require('react');

const Weather = React.createClass({
  getInitialState(){
    return {weather: []};
  },
  successCallback(pos){
    this.lat = pos.coords.latitude;
    this.lon = pos.coords.longitude;

    const xhr = new XMLHttpRequest();
    const url = 'http://api.openweathermap.org/data/2.5/weather?lat=' + this.lat + '&lon=' + this.lon + '&appid=645c5d39c7603f17e23fcaffcea1a3c1';
    console.log(url);
    xhr.open('GET', url);
    xhr.onload = function () {
      this.setState({weather: xhr.response});
    }.bind(this);
    xhr.send();
  },
  failureCallback(err){
    console.warn('ERROR(' + err.code + '): ' + err.message);
  },
  componentDidMount(){
    navigator.geolocation.getCurrentPosition(this.successCallback, this.failureCallback, {timeout: 10000});


  },
  render(){
    return (<div>{this.state.weather}</div>);
  }
});

module.exports = Weather;
