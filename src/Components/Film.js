import React, {Component} from 'react';


class Film extends Component{



render(){
  return(
    <div className="film">
    <ul>
    <li >{this.props.name}</li>
    </ul>
    </div>
  )
}



}

export default Film;
