import React, { useState } from 'react'

import ButtonComponent from './ButtonComponent';

import "./CardComponent.css"

export default function CardComponent({imag, altr, title, description}) {
    const [details, setShow] = useState(false);

    function onButtonClick() {
        setShow(!details);
    }
  return (
    <div className={details ? "Card Details" : "Card"}>
        <img src={imag} alt={altr} />
        {
            details && <h1>{title}</h1>
        }
        {
            details && <p>{description}</p>
        } 
        <ButtonComponent buttonClick={onButtonClick} details={details}/>
    </div>
  )
}