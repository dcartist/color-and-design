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
  return (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={<Button style={modalcolor} >More info</Button>}
      size='fullscreen'
    >
      <Modal.Header>Select a Photo</Modal.Header>
      <Modal.Content image>
      <div className="modalcolorBackground" style={{backgroundColor: props.hex}}></div>
        <Modal.Description>
  <Header>{props.name}</Header>
          <p>
            We've found the following gravatar image associated with your e-mail
            address.
          </p>
          <p>Is it okay to use this photo?</p>
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions>
        {/* <Button color='black' onClick={() => setOpen(false)}>
          Nope
        </Button> */}
        <Button
          content="Done"
          labelPosition='right'
          icon='checkmark'
          onClick={() => setOpen(false)}
          positive
        />
      </Modal.Actions>
    </Modal>
  )
}

export default ModalExampleModal
