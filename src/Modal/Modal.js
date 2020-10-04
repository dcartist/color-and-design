import React from 'react'
import { Button, Header, Image, Modal } from 'semantic-ui-react'

function ModalExampleModal(props) {
  const [open, setOpen] = React.useState(false)

  return (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={<Button>More info</Button>}
      size='fullscreen'
    >
      <Modal.Header>Select a Photo</Modal.Header>
      <Modal.Content image>
        {/* <div></div> */}
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
        <Button color='black' onClick={() => setOpen(false)}>
          Nope
        </Button>
        <Button
          content="Yep, that's me"
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
