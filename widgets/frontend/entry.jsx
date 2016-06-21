const React = require('react');
const ReactDOM = require('react-dom');
const Widgets = require('./widgets');

document.addEventListener("DOMContentLoaded", () => {
  ReactDOM.render(<Widgets/>, document.getElementById('main'));
});
