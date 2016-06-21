const React = require('react');

const Tabs = React.createClass({
  getInitialState(){
    return {selectedIndex: 0};
  },
  handleClick(idx) {
    console.log(idx);
    return this.setState({selectedIndex: idx});
  },
  render (){
    const datas = this.props.tabData.map( (obj, idx) => {
      let style = '';
      let isHidden = true;
      if (this.state.selectedIndex === idx){
        style = 'bold';
        isHidden = false;
      }
      return(
        <li>
          <h1 className={style}
              onClick={this.handleClick.bind(this, idx)}>{obj.title}</h1>
            <article hidden={isHidden}>{obj.content}</article>
        </li>
      );
    });
      return (<ul>{datas}</ul>);
  }
});


module.exports = Tabs;
