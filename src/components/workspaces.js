import React from 'react';
import {
  Grid
} from 'semantic-ui-react';

import './components.css'

function WideColumnWorkspace(props) {
  return (
    <Grid padded className='WorkspaceGrid'>
      <Grid.Row className='WorkspaceGridRow'>
        <Grid.Column />
        <Grid.Column width={14} className='WideColumnWorkspace' children={props.children} />
        <Grid.Column />
      </Grid.Row>
    </Grid>
  )
}

function NarrowColumnWorkspace(props) {
  return (
    <Grid padded className='WorkspaceGrid'>
      <Grid.Row className='WorkspaceGridRow'>
        <Grid.Column width={2} />
        <Grid.Column width={12} className='NarrowColumnWorkspace' children={props.children} />
        <Grid.Column width={2} />
      </Grid.Row>
    </Grid>
  )
}

export {WideColumnWorkspace, NarrowColumnWorkspace}
