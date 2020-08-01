import React, {Component} from 'react';


class Film extends Component{

clickUrl(){
  let click='this.props.url';
  window.open(click);
}

render(){
  return(
    <div className="film">
    <ul>
    <li onClick={this.clickUrl}>{this.props.name}</li>
    </ul>
    </div>
  )
}



}

export default Film;
