import React from 'react'
import "./Loader.css"
import { Dimmer, Loader, Segment } from 'semantic-ui-react'

const Loaders = () => (
  <div className="LoadingPage">
    <Segment>
      <Dimmer active inverted>
        <Loader size='large'>Loading</Loader>
      </Dimmer>

      {/* <Image src='/images/wireframe/paragraph.png' /> */}
    </Segment>

  </div>
)

export default Loaders
