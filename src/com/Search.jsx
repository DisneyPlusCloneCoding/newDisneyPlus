import React from 'react'
import '../CSS/Search.css'

export default function Search() {
  const collection = ['./images/겨율왕국컬렉션.png', './images/다스베이더컬렉션.png', './images/닥터스트레인지컬렉션.png', './images/동물과자연컬렉션.png', './images/로맨스컬렉션.png', './images/맹수몬스터컬렉션.png', './images/메이드인코리아컬렉션.png', './images/뮤지컬컬렉션.png', './images/미키마우스친구들컬렉션.png', './images/스타워즈컬렉션.png', './images/스페이스컬렉션.png', './images/심슨가족컬렉션.png', './images/오비완케노비컬렉션.png', './images/완다와비전컬렉션.png', './images/토이스토리컬렉션.png', './images/평론가호평컬렉션.png', './images/프레데터컬렉션.png', './images/호러컬렉션.png', './images/혹성탈출컬렉션.png', './images/모든컬렉션.png']

  return (
    <main className='main--Search'>
      <header className='header--Search'>
        <div className='inputBox'>
          <img src='./images/search2.png' alt='돋보기' className='img--input--Search' />
          <input type='text' className='input--Search' placeholder='제목 또는 캐릭터로 검색하세요' />
        </div>
      </header>
      <p className='p--Search'>컬렉션 둘러보기</p>
      <section className='section--Search'>
        {collection.map((link) => 
          <div className='collections'>
            <img src={link} className='img--collections' />
          </div>
        )}
      </section>
    </main>
  )
}