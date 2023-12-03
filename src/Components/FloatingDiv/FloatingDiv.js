import React from 'react'

const FloatingDiv = ({image,text1,text2}) => {
  return (
    <div className='floatingdiv'>
        <img src={image}/>
        <span>
            {text1}
            <br/>
            {text2}
        </span>
    </div>
  )
}

export default FloatingDiv