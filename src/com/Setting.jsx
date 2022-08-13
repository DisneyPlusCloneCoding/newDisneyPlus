import React from 'react'
import '../CSS/Setting.css'

export default function Setting() {
  return (
    <main className='main--Setting'>
      <h1 className='h1--Setting'>설정</h1>
      <div className='div--Setting'>
        <p className='p--Setting'>프로필</p>
        <img src='./images/arrowRight.png' alt='setting' className='img--Setting' />
      </div>
      <div className='div--Setting'>
        <p className='p--Setting'>앱 설정</p>
        <img src='./images/arrowRight.png' alt='setting' className='img--Setting' />
      </div>
      <div className='div--Setting'>
        <p className='p--Setting'>계정</p>
        <img src='./images/arrowRight.png' alt='setting' className='img--Setting' />
      </div>
      <div className='div--Setting'>
        <p className='p--Setting'>고객센터</p>
        <img src='./images/arrowRight.png' alt='setting' className='img--Setting' />
      </div>
      <div className='div--Setting'>
        <p className='p--Setting'>법률센터</p>
        <img src='./images/arrowRight.png' alt='setting' className='img--Setting' />
      </div>
      <div className='div--Setting'>
        <p className='p--Setting'>로그아웃</p>
        <img src='./images/arrowRight.png' alt='setting' className='img--Setting' />
      </div>
      <p className='version'>버전: 1.32.3.0</p>
    </main>
  )
}