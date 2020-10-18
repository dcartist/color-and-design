import React, { Component } from 'react'
import { Grid, Pagination } from 'semantic-ui-react'

export default class PaginationExampleControlled extends Component {

  state = {
    // activePage: 5,
    boundaryRange: 2,
    siblingRange: 2,
    showEllipsis: true,
    showFirstAndLastNav: true,
    showPreviousAndNextNav: true,
  }

  render() {
    // const { activePage } = this.state
    const {
      // boundaryRange,
      siblingRange,
      showEllipsis,
      showFirstAndLastNav,
      showPreviousAndNextNav,
    } = this.state

    return (
      <Grid columns={2} verticalAlign='middle'>
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
