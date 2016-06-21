const React = require('react');
const ReactCSSTransitionGroup = require('react-addons-css-transition-group');

const Autocomplete = React.createClass({
  getInitialState() {
    return {searchString: ''};
  },
  handleChange(event){
    this.setState({searchString: event.target.value});
  },
  clickHandler(event){
    this.setState({searchString: event.target.innerHTML});
  },
  render(){
    let searchString = this.state.searchString.trim().toLowerCase();
    const searchedNames = this.props.searchData.filter(function(name) {
      return name.toLowerCase().match(searchString);
    });
    return (
      <article>
        <input type="text" onChange={this.handleChange} value={this.state.searchString}/>
        <ul>
          <ReactCSSTransitionGroup transitionName="auto" transitionEnterTimeout={500} transitionLeaveTimeout={500}>
            {searchedNames.map(name => {return <li onClick={this.clickHandler}>{name}</li>;})}
          </ReactCSSTransitionGroup>
        </ul>
      </article>
    );
  }
});


module.exports = Autocomplete;
