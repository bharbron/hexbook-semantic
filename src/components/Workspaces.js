import React, { Component } from 'react';
import {
  Grid
} from 'semantic-ui-react';

import './components.css'

class WideColumnWorkspace extends Component {
  render () {
    return (
      <Grid padded className='WorkspaceGrid'>
        <Grid.Row className='WorkspaceGridRow'>
          <Grid.Column />
          <Grid.Column width={14} className='WideColumnWorkspace' children={this.props.children} />
          <Grid.Column />
        </Grid.Row>
      </Grid>
    )
  }
}

class NarrowColumnWorkspace extends Component {
  render () {
    return (
      <Grid padded className='WorkspaceGrid'>
        <Grid.Row className='WorkspaceGridRow'>
          <Grid.Column with={3} />
          <Grid.Column width={10} className='NarrowColumnWorkspace' children={this.props.children} />
          <Grid.Column with={3} />
        </Grid.Row>
      </Grid>
    )
  }
}

export { WideColumnWorkspace, NarrowColumnWorkspace }