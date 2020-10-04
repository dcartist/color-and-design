import React from 'react'
import Modal from "../Modal/Modal"
import './Card.css'

const CardCustomDesign = (props) => (
    <div classname="displayedCard" style={{backgroundColor: props.hex}}>
        <div className="colorBackground"></div>
        <h1 classname="cardTitle">{props.name}</h1>
        <Modal {...props} className="modalSpacing"></Modal>
    </div>
  )
  
  export default CardCustomDesign