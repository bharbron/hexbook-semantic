import React, { Component } from 'react';
import { push } from 'connected-react-router'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import {
  Button,
  Divider,
  Header,
  Icon,
  Segment
} from 'semantic-ui-react';
import { WideColumnWorkspace } from '../components/Workspaces'

import './containers.css';

const mapStateToProps = state => ({
})

const mapDispatchToProps = dispatch => bindActionCreators({
  changePage: () => push('/Hexes')
}, dispatch)

class HomeWorkspace extends Component {
  render() {
    return (
      <div id="HomeWorkspace">
        <WideColumnWorkspace>
          <Segment basic textAlign='center' id='HomeWorkspace'>
            <Header as='h1' icon>
              <Icon name='map marker alternate' />
                HexPop!
              <Header.Subheader>In goes your hexes. Out pops a campaign.</Header.Subheader>
            </Header>
            <Divider hidden />
            <Button positive onClick={() => this.props.changePage()}>New Project</Button>
          </Segment>
        </WideColumnWorkspace>
      </div>
    );
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeWorkspace)