import React from 'react'
import { Card, Icon} from 'semantic-ui-react'
import './Card.css'
import Modal from "../Modal/Modal"
const CardExampleImageCard = (props) => (
  <Card fluid>
      <div className="colorBackground" style={{backgroundColor: props.hex}}></div>
    <Card.Content>
<Card.Header>{props.name}</Card.Header>

    </Card.Content>
    <Card.Content extra>
      <Modal {...props}></Modal>
     
    </Card.Content>
  </Card>
)

export default CardExampleImageCard