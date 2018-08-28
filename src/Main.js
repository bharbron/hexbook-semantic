import React, { Component } from 'react';
import {
  Grid,
  Icon,
  Menu
} from 'semantic-ui-react'
import './Main.css'

class Main extends Component {
  render() {
    return (
      <div style={{ height: 'inherit' }}>

        <Grid padded style={{ height: 'inherit' }}>
          <Grid.Row style={{ marginLeft: '6.7rem', height: 'inherit' }}>
            <Grid.Column width='13' style={{ height: 'inherit' }}>
            </Grid.Column>
            <Grid.Column width='3' stretched>
            </Grid.Column>
          </Grid.Row>
        </Grid>

        <Menu borderless compact fixed='left' inverted pointing icon='labeled' vertical>
          <Menu.Item style={{ marginTop: '1rem' }}><Icon name='map marker alternate' />HexPop!</Menu.Item>
        </Menu>

      </div>
    )
  };
}

export default Main