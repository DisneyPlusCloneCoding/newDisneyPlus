import React from 'react'
import '../CSS/Movies.css'

export default function Movies(props) {
  return (
    <main className='main--Movies'>
      {props.movies.map((movie, i) => <img src={movie} alt='movie' className='movies' key={i} onClick={() => props.onClickhandler(movie)} />)}
    </main>
  );
}
