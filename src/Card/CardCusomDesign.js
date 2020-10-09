import React from 'react'
import Modal from "../Modal/Modalboot"
import 'semantic-ui-css/semantic.min.css'
import './Card.css'

const cardStyle= {
    'backgroundColor': 'black',
    'textAlign':"center",
    'color': 'white',
    'width': '100%',
    'padding': "5px",
    'fontFamily': "'Open Sans', sans-serif",
    'fontWeight': '600',
    'fontSize': "18px"
}
const CardCustomDesign = (props) => (
    <div classname="displayedCard" style={{backgroundColor: props.hex}}>
        <div className="colorBackground"></div>
        <div style={cardStyle}>
        {props.name}
        </div>
        <Modal {...props} className="modalSpacing"></Modal>
    </div>
  )
  
  export default CardCustomDesign