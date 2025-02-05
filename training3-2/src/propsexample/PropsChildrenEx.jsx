import React from 'react'

const PropsChildrenEx = (props) => {
    console.log(props)
  return (
    <div className='child'>
      <h1>PropsChildren</h1>
      <h1>{props.username}</h1>
      <h2>{props.company}</h2>
      {
        props.children[0]
      }
    </div>
  )
}

export default PropsChildrenEx
