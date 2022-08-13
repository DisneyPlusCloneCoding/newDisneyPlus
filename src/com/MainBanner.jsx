import React from 'react'
import '../CSS/MainBanner.css'


export default function MainBanner() {
  const images = ['./images/내가그를만났을때.png', './images/니부모얼굴이보고싶다.png', './images/닥터스트레인지2.png', './images/드롭아웃.png', './images/링크.png', './images/미즈마블.png', './images/신데렐라.png', './images/심슨가족.png', './images/오비완케노비.png', './images/칩과데일다람쥐구조대.png', './images/키스식스센스.png', './images/토이스토리.png', './images/할리우드스타걸.png']
  let count = 0

  function Next() {
    if(count === -1200) return
    count -= 100
    document.getElementsByClassName('banner')[0].style.transform = `translate(${count}vw)`
  }

  function Back() {
    if(count === 0) return
    count += 100
    document.getElementsByClassName('banner')[0].style.transform = `translate(${count}vw)`
  }

  return (
    <div>
      <div className='banner'>
        {images.map((url) => {
          return <div className='div--MovieCards'><img src={url} alt='Movie' className='img--MovieCards' /></div>
        })}
      </div>
      <button className='back' onClick={Back}><img src='./images/arrowLeft.png' alt='화살표' className='img--button--MainBanner' /></button>
      <button className='next' onClick={Next}><img src='./images/arrowRight.png' alt='화살표' className='img--button--MainBanner' /></button>
    </div>
  )
}