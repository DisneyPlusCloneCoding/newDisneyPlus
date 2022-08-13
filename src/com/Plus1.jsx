import React from 'react'
import '../CSS/Plus1.css'

export default function Plus() {
  return (
    <div className='div--Plus'>
      <h1 className='h1--Plus'>관심 콘텐츠</h1>
      <main className='main--Plus'>
        <img src='./images/add.png' alt='add' />
        <p className='p--main--Plus'>관심 콘텐츠가 비어 있습니다.</p>
        <p className='p--main--Plus'>관심 콘텐츠에 추가하는 콘텐츠가 여기에 표시됩니다.</p>
      </main>
    </div>
  )
}