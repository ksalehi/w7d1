const React = require('react');
const Tabs = require('./tabs');
const Clock = require('./clock');
const Weather = require('./weather');
const Autocomplete = require('./autocomplete');

const Widgets = React.createClass({
  render() {
    const tabData = [
      {title: "string", content: "asdf"},
      {title: "string1", content: "hi"},
      {title: "string2", content: "bye"}
    ];

    const searchData = [
      "gage", "sam", "claire", "ryan", "brooke", "quinn"
    ];

    return(
      <div>
        <Tabs tabData={tabData}/>
        <Clock />
        <Weather />
        <Autocomplete searchData={searchData}/>
      </div>
    );
  }
});

module.exports = Widgets;
