import React, { Component } from 'react'
import { Grid, Input, Pagination, Segment } from 'semantic-ui-react'

export default class PaginationExampleControlled extends Component {
  // constructor(props){
  //   super()
  //   this.state = { activePage: 1 }
  // }

  // handleInputChange = (e, { value }) => this.setState({ activePage: value })

  // handlePaginationChange = (e, { activePage }) => this.setState({ activePage })

  render() {
    // const { activePage } = this.state

    return (
      <Grid columns={2} verticalAlign='middle'>
        {/* <Grid.Column>
          <Segment secondary>
            <div>activePage: {this.props.activePage}</div>
            <Input
              min={1}
              max={5}
              onChange={this.props.handleInputChange}
              type='range'
              value={this.props.activePage}
            />
          </Segment>
        </Grid.Column> */}
        <Grid.Column>
          <Pagination
            activePage={this.props.activePage}
            onPageChange={this.props.handlePaginationChange}
            totalPages={26}
          />
        </Grid.Column>
      </Grid>
    )
  }
}


// function PaginationExampleControlled (props) {
//   return <div className='message-box'>
//     Hello {name}
//   </div>
// }
