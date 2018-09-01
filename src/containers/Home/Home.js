import React, { Component } from 'react';
import { push } from 'connected-react-router'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';
import {
  Button,
  Divider,
  Header,
  Icon,
  Menu,
  Segment
} from 'semantic-ui-react';
import './Home.css';

const mapDispatchToProps = dispatch => bindActionCreators({
  changePage: () => push('/Hexes')
}, dispatch)

class HomeWorkspace extends Component {
  render() {
    return (
        <Segment basic textAlign='center' id='HomeSegmentScroll'>
          <Header as='h1' icon>
            <Icon name='map marker alternate' />
              HexPop!
            <Header.Subheader>All your hexes. All your tables. None of your effort.</Header.Subheader>
          </Header>
          <Divider hidden />
          <Button positive onClick={() => this.props.changePage()}>New Project</Button>
        </Segment>  
    );
  };
};

class HomeMenu extends Component {
  render() {
    return (
      <div>
        <Menu.Item as={Link} to='/hexes'><Icon name='cube' />Hexes</Menu.Item>
        <Menu.Item as={Link} to='/tags'><Icon name='tags' />Tags</Menu.Item>
        <Menu.Item as={Link} to='/tables'><Icon name='list' />Tables</Menu.Item>
        <Menu.Item as={Link} to='/templates'><Icon name='puzzle piece' />Templates</Menu.Item>
        <Menu.Item as={Link} to='/books'><Icon name='book' />Books</Menu.Item>
      </div>
    );
  };
};

class HomeControls extends Component {
  render() {
    return (
      <Button circular color='google plus' size='massive' icon='pencil' style={{ position: 'fixed', bottom: '2rem', right: '2rem' }} />
    );
  };
};

export default connect(
  null, 
  mapDispatchToProps
)(HomeWorkspace)