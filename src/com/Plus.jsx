import React from 'react'
import Plus1 from './Plus1'
import Plus2 from './Plus2'

export default function Plus(props) {
  let [arr, setArr] = React.useState(Array.from(props.set))

  function _deletePlus(url) {
    props._delete(url)
    let newArr = arr.filter(element => element !== url)
    setArr(newArr)
    localStorage.setItem('pick', newArr)
  }

  return (
    <>
      {arr === null || arr.length === 0 ? <Plus1 /> : <Plus2 picks={arr} _delete={_deletePlus} />}
    </>
  )
}