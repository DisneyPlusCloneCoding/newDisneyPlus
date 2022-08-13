import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from './com/Header'
import Home from './com/Home'
import Plus from './com/Plus'
import Search from './com/Search'
import Movie from './com/Movie'
import Series from './com/Series'
import Setting from './com/Setting'
import Original from './com/Original'
import './CSS/Main.css'

export default function Main() {
  let set = new Set()

  function onClickhandler(url) {
    set.add(url)
    let arr = Array.from(set)
    localStorage.setItem('pick', arr)
  }

  function _delete(url) {
    set.delete(url)
    let arr = Array.from(set)
    localStorage.setItem('pick', arr)
  }

  return (
    <div className='Main'>
      <Header />
      <Routes>
        <Route path='/' element={<Home set={set} onClickhandler={onClickhandler} />} />
        <Route path='/home' element={<Home set={set} onClickhandler={onClickhandler} />} />
        <Route path='/plus' element={<Plus set={set} onClickhandler={onClickhandler} _delete={_delete} />} />
        <Route path='/search' element={<Search />}/>
        <Route path='/movie' element={<Movie set={set} onClickhandler={onClickhandler} />}/>
        <Route path='/series' element={<Series set={set} onClickhandler={onClickhandler} />}/>
        <Route path='/setting' element={<Setting />}/>
        <Route path='/original' element={<Original set={set} onClickhandler={onClickhandler} />}/>
      </Routes>
    </div>
  );
}
