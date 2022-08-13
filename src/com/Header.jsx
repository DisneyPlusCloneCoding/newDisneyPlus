import React from 'react'
import {  Link } from 'react-router-dom'
import '../CSS/Header.css'

export default function Header() {
  return (
    <header className='header--Header'>
      <img src='./images/disneyplus.png' alt='DisneyPlus' className='img--header' />
      <nav>
        <Link to='/home' className='Link--Header'>
          <img src='./images/home.png' alt='home' className='img--Link' />
          <span>홈</span>
        </Link>
        <Link to='/search' className='Link--Header'>
          <img src='./images/search1.png' alt='search1' className='img--Link' />
          <span>검색</span>
        </Link>
        <Link to='/plus' className='Link--Header'>
          <img src='./images/plus.png' alt='plus' className='img--Link' />
          <span>관심 콘텐츠</span>
        </Link>
        <Link to='/movie' className='Link--Header'>
          <img src='./images/movie.png' alt='movie' className='img--Link' />
          <span>영화</span>
        </Link>
        <Link to='/series' className='Link--Header'>
          <img src='./images/TV.png' alt='TV' className='img--Link' />
          <span>시리즈</span>
        </Link>
        <Link to='/original' className='Link--Header'>
          <img src='./images/star.png' alt='star' className='img--Link' />
          <span>오리지널</span>
        </Link>
        <Link to='/setting' className='Link--Header'>
          <img src='./images/settings.png' alt='settings' className='img--Link' />
          <span>설정</span>
        </Link>
      </nav>
    </header>
  )
}