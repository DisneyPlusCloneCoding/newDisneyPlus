import React from 'react'
import '../CSS/Banner.css'

export default function Banner() {
  return (
    <nav className='nav--Banner'>
      <div className='div--Banner'>
        <img src='./images/disneyLogo.png' alt='disney' className='img--div--Banner' />
      </div>
      <div className='div--Banner'>
        <img src='./images/pixarLogo.png' alt='pixar' className='img--div--Banner' />
      </div>
      <div className='div--Banner'>
        <img src='./images/marvelLogo.png' alt='marvel' className='img--div--Banner' />
      </div>
      <div className='div--Banner'>
        <img src='./images/starwarsLogo.png' alt='starwars' className='img--div--Banner' />
      </div>
      <div className='div--Banner'>
        <img src='./images/nationalgeographicLogo.png' alt='nationalgeographic' className='national--div--Banner' />
      </div>
      <div className='div--Banner'>
        <img src='./images/starLogo.png' alt='star' className='img--div--Banner' />
      </div>
    </nav>
  )
}