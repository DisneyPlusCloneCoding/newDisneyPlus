import React from 'react'
import '../CSS/Plus2.css'

export default function Plus2(props) {
  return (
    <div>
      <h1 className='plus2--title'>회원님께서 고르신 콘텐츠들 입니다.</h1>
      <main className='plus2--main'>
      {props.picks.map(url => {
          return <div className='plus2--pick' onClick={() => props._delete(url)}><img src={url} alt='movie' className='img--picks' /></div>
        })}
      </main>
    </div>
  )
}