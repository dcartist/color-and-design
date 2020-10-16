import React, { Component } from 'react'
import { Grid, Input, Pagination, Segment } from 'semantic-ui-react'

export default class PaginationExampleControlled extends Component {
  // constructor(props){
  //   super()
  //   this.state = { activePage: 1 }
  // }
  state = {
    // activePage: 5,
    boundaryRange: 2,
    siblingRange: 2,
    showEllipsis: true,
    showFirstAndLastNav: true,
    showPreviousAndNextNav: true,
    // totalPages: 50,
  }

  // handleInputChange = (e, { value }) => this.setState({ activePage: value })

  // handlePaginationChange = (e, { activePage }) => this.setState({ activePage })

  render() {
    // const { activePage } = this.state
    const {
      boundaryRange,
      siblingRange,
      showEllipsis,
      showFirstAndLastNav,
      showPreviousAndNextNav,
    } = this.state

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
            siblingRange={siblingRange}
            ellipsisItem={showEllipsis ? undefined : null}
            firstItem={showFirstAndLastNav ? undefined : null}
            lastItem={showFirstAndLastNav ? undefined : null}
            prevItem={showPreviousAndNextNav ? undefined : null}
            nextItem={showPreviousAndNextNav ? undefined : null}
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
