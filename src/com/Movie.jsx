import React, { useState } from 'react'
import Movies from './Movies'
import '../CSS/Movie.css'

export default function Movie(props) {
  let movie = ['./images/가디언즈오브갤럭시2.png', './images/굿다이노.png', './images/호크아이.png', './images/코코.png', './images/나이트메어앨리.png', './images/다이하드3.png', './images/닥터스트레인지.png', './images/라따뚜이.png', './images/라야와마지막드래곤.png', './images/런어웨이즈.png', './images/로키.png', './images/루카.png', './images/메이의새빨간비밀.png', './images/모아나.png', './images/문나이트.png', './images/본즈.png', './images/블랙위도우.png', './images/블랙팬서.png', './images/소울.png', './images/아메리칸호러스토리즈.png', './images/아이언맨3.png', './images/어벤져스.png', './images/어벤져스엔드게임.png', './images/어벤져스인피니티워.png', './images/언더워터.png', './images/엔칸토마법의세계.png', './images/오리엔트특급살인.png', './images/온워드단하루의기적.png', './images/완다비전.png', './images/워킹데드.png', './images/인크레더블2.png', './images/점퍼.png', './images/주먹왕랄프2.png', './images/주토피아.png', './images/캡틴마블.png', './images/캡틴아메리카시빌워.png', './images/캡틴아메리카윈터솔져.png', './images/코코.png', './images/크리미널마인트.png', './images/토르라그나로크.png', './images/토이스토리4.png', './images/파이트클럽.png', './images/프리즌브레이크.png', './images/호크아이.png', './images/스파이더맨뉴유니버스.png', './images/스파이더맨파프롬홈.png', './images/스파이더맨홈커밍.png', './images/앤트맨.png', './images/어메이징스파이더맨.png', './images/어메이징스파이더맨2.png', './images/왓이프.png', './images/팔콘과윈터솔져.png']
  let [movies, setMovies] = useState(movie.sort(() => Math.random() - 0.5))
  let [prevId, setPrevId] = useState()

  function click(id) {
    if(id === prevId) return
    setMovies(prev => prev.sort(() => Math.random() - 0.5))
    document.getElementById(id).style.fontWeight = 'bolder'
    if(prevId !== undefined)
      document.getElementById(prevId).style.fontWeight = 'normal'
    setPrevId(() => id)
  }

  return (
    <div className='div--Movie'>
      <header className='header--Movie'>
        <h1 className='h1--Movie'>영화</h1>
        <nav className='nav--Movie'>
          <div className='div--nav--Movie' onClick={() => {click('recommend')}}>
            <p className='p--Movie' id='recommend'>디즈니+ 추천</p>
          </div>
          <div className='div--nav--Movie' onClick={() => {click('allMovies')}}>
            <p className='p--Movie' id='allMovies'>모든 영화</p>
          </div>
          <div className='div--nav--Movie' onClick={() => {click('A&A')}}>
            <p className='p--Movie' id='A&A'>액션 & 어드벤처</p>
          </div>
          <div className='div--nav--Movie' onClick={() => {click('animation')}}>
            <p className='p--Movie' id='animation'>애니메이션</p>
          </div>
          <div className='div--nav--Movie' onClick={() => {click('comedy')}}>
            <p className='p--Movie' id='comedy'>코미디</p>
          </div>
          <div className='div--nav--Movie' onClick={() => {click('documentary')}}>
            <p className='p--Movie' id='documentary'>다큐멘터리</p>
          </div>
          <div className='div--nav--Movie' onClick={() => {click('drama')}}>
            <p className='p--Movie' id='drama'>드라마</p>
          </div>
          <div className='div--nav--Movie' onClick={() => {click('IMAX')}}>
            <p className='p--Movie' id='IMAX'>IMAX Enhanced</p>
          </div>
          <div className='div--nav--Movie' onClick={() => {click('romantic')}}>
            <p className='p--Movie' id='romantic'>로맨틱 코미디</p>
          </div>
          <div className='div--nav--Movie' onClick={() => {click('SF')}}>
            <p className='p--Movie' id='SF'>SF</p>
          </div>
          <div className='div--nav--Movie' onClick={() => {click('shorts')}}>
            <p className='p--Movie' id='shorts'>단편</p>
          </div>
          <div className='div--nav--Movie' onClick={() => {click('sports')}}>
            <p className='p--Movie' id='sports'>스포츠</p>
          </div>
          <div className='div--nav--Movie' onClick={() => {click('thriller')}}>
            <p className='p--Movie' id='thriller'>스릴러</p>
          </div>
          <div className='div--nav--Movie' onClick={() => {click('western')}}>
            <p className='p--Movie' id='western'>서부극</p>
          </div>
          <div className='div--nav--Movie' onClick={() => {click('kids')}}>
            <p className='p--Movie' id='kids'>키즈</p>
          </div>
          <div className='div--nav--Movie' onClick={() => {click('U&H')}}>
            <p className='p--Movie' id='U&H'>고화질 UHD & HDR</p>
          </div>
        </nav>
      </header>
      <Movies movies={movies} set={props.set} onClickhandler={props.onClickhandler} />
    </div>
  )
}