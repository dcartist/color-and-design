import React from 'react'
import { Button, Header, Image, Modal } from 'semantic-ui-react'
import '../Card/Card.css'
function ModalExampleModal(props) {
  const [open, setOpen] = React.useState(false)
  const modalcolor = {
    'backgroundColor':"black",
    'color':"white",
    'width':"100%",
    'margin-bottom': "20px",
    'borderRadius': "0"

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
  return (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={<Button style={modalcolor} >More info</Button>}
      size='fullscreen'
    >
      <Modal.Header><div className="modalcolorBackground1" style={{backgroundColor: props.hex}}>
      <div style={cardStyle}>
        {props.name}
        <p>hex: {props.hex} &nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp; rgb: {props.rgb} </p>
        </div>
 
        </div></Modal.Header>
      <Modal.Actions>
        {/* <Button color='black' onClick={() => setOpen(false)}>
          Nope
        </Button> */}
        <Button
          content="Done"
          color='black'
          labelPosition='right'
          icon='paint brush'
          onClick={() => setOpen(false)}
        />
      </Modal.Actions>
    </Modal>
  )
}

export default ModalExampleModal
