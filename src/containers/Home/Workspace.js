import React, { Component } from 'react';
import { push } from 'connected-react-router'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import {
  Button,
  Divider,
  Header,
  Icon,
  Menu,
  Segment
} from 'semantic-ui-react';
import './Workspace.css';

const mapDispatchToProps = dispatch => bindActionCreators({
  changePage: () => push('/Hexes')
}, dispatch)

class HomeWorkspace extends Component {
  render() {
    return (
      <Segment basic textAlign='center' id='HomeWorkspace'>
        <Header as='h1' icon>
          <Icon name='map marker alternate' />
            HexPop!
          <Header.Subheader>In goes your hexes. Out pops a campaign.</Header.Subheader>
        </Header>
        <Divider hidden />
        <Button positive onClick={() => this.props.changePage()}>New Project</Button>
      </Segment>  
    );
  };
};

export default connect(
  null, 
  mapDispatchToProps
)(HomeWorkspace)