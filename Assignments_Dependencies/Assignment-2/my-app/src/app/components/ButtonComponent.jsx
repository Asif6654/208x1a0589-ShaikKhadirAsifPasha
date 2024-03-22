import React from 'react'
import "./ButtonComponent.css"

function ButtonComponent({buttonClick, details}) {
  return (
    <button onClick={buttonClick} className='Button'>
        {details ? 'Less Details' : 'Click For More Details'}
    </button>
  )
}

export default ButtonComponent