import React from 'react'
import Banner from './Banner'
import MainBanner from './MainBanner'
import SideBanner from './SideBanner'

export default function Home(props) {
  return (
    <main>
      <MainBanner />
      <Banner />
      <SideBanner text='취향저격 추천 콘텐츠' id='1' set={props.set} onClickhandler={props.onClickhandler} />
      <SideBanner text='디즈니+ 최신작' id='2' set={props.set} onClickhandler={props.onClickhandler} />
      <SideBanner text='Star 하이라이트' id='3' set={props.set} onClickhandler={props.onClickhandler} />
      <SideBanner text='지금 뜨는 콘텐츠' id='4' set={props.set} onClickhandler={props.onClickhandler} />
      <SideBanner text='라이브 액션 영화' id='5' set={props.set} onClickhandler={props.onClickhandler} />
    </main>
  )
}
