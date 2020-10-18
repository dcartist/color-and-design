import React,  { useState } from 'react';
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import 'bootstrap/dist/css/bootstrap.min.css';

import '../Card/Card.css'


function ModalBoot (props) {
    const modalcolor = {
        'backgroundColor':"black",
        'color':"white",
        'fontFamily': "'Open Sans', sans-serif",
        'fontWeight': '600',
        'width':"100%",
        'margin-bottom': "20px",
        'borderRadius': "0",
        'fontSize': "13px"
    
      }
      const cardStyle= {
        'backgroundColor': 'black',
        'textAlign':"center",
        'color': 'white',
        'width': '100%',
        'padding': "5px",
        'fontFamily': "'Open Sans', sans-serif",
        'fontWeight': '600',
        'marginBottom': '20px',
        'fontSize': "18px"
    }
    const colorModaltitle = {
      'fontFamily': "'Open Sans Condensed', sans-serif",
      'fontWeight': '300',
      'fontSize': "12px"
    }
   

    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
      <>
        <Button variant="dark" onClick={handleShow} size="lg" block style={modalcolor}>
          More Info
        </Button>
  
        <Modal show={show} onHide={handleClose} size="lg" centered >
          <Modal.Header closeButton>
            {/* <Modal.Title>Modal heading</Modal.Title> */}
          </Modal.Header>
          <Modal.Body>
              
          <div className="modalcolorBackground1" style={{backgroundColor: props.hex}}>
      <div style={cardStyle}>
        <h2>{props.name}</h2>
        <p><span>hex:</span> {props.hex} &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; <span className={colorModaltitle}>rgb:</span> {props.rgb} </p>
        </div>
 
        </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
  export default ModalBoot;