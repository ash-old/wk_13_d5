import React, {Component} from 'react';
import Film from './Film';

class FilmList extends Component{

  render(){
    const filmNodes= this.props.films.map(film =>{
      return(
        <Film name={film.name}key={film.id}url={film.url}/>
      )
    })
    return(
      <div className="film-list">
        {filmNodes}
      </div>
    )
  }



}

export default FilmList;
