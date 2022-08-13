import React from 'react'
import SideBanner from './SideBanner'
import '../CSS/Original.css'

export default function Original(props) {
  return (
    <div className='div--Original'>
      <h1 className='h1--Original'>ORIGINAL</h1>
      <SideBanner text='디즈니+ 오리지널 추천작' id='10' set={props.set} onClickhandler={props.onClickhandler} />
      <SideBanner text='Star 오리지널 추천작' id='11' set={props.set} onClickhandler={props.onClickhandler} />
      <SideBanner text='오리지널 시리즈' id='12' set={props.set} onClickhandler={props.onClickhandler} />
      <SideBanner text='오리지널 영화' id='13' set={props.set} onClickhandler={props.onClickhandler} />
      <SideBanner text='오리지널 단편' id='14' set={props.set} onClickhandler={props.onClickhandler} />
      <SideBanner text='오리지널 스페셜' id='15' set={props.set} onClickhandler={props.onClickhandler} />
    </div>
  )
}