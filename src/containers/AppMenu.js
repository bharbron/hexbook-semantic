import React, { Component } from 'react';
import { push } from 'connected-react-router'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';
import {
  Divider,
  Header,
  Icon,
  List,
  Menu
} from 'semantic-ui-react';
import routes from '../constants/routes.json'

require('./containers.css')

const mapStateToProps = state => ({
  pathname: state.router.location.pathname,
  search: state.router.location.search,
  hash: state.router.location.hash,
})

const mapDispatchToProps = dispatch => bindActionCreators({
  changePage: url => push(url)
}, dispatch)

class AppMenu extends Component {
  isActive(url) {
    return this.props.pathname === url
  }

  render () {
    return (
      <Menu secondary pointing size='large' fixed='left' vertical id='AppMenu'>
        <Menu.Item as={Link} to={routes.HOME} id='AppMenuHexPopLogo'>
          <Header as='h2' textAlign='center' icon inverted color='grey'>
            <Icon name='cubes' />
            HexPop!
          </Header>
        </Menu.Item>
        <Menu.Item active={ this.isActive(routes.HEXES) } onClick={() => this.props.changePage(routes.HEXES)}><Icon name='cube' className='left' />Hexes</Menu.Item>
        <Menu.Item active={ this.isActive(routes.TAGS) } onClick={() => this.props.changePage(routes.TAGS)}><Icon name='tags' className='left' />Tags</Menu.Item>
        <Menu.Item active={ this.isActive(routes.TABLES) } onClick={() => this.props.changePage(routes.TABLES)}><Icon name='list' className='left' />Tables</Menu.Item>
        <Menu.Item active={ this.isActive(routes.TEMPLATES) } onClick={() => this.props.changePage(routes.TEMPLATES)}><Icon name='puzzle piece' className='left' />Templates</Menu.Item>
        <Menu.Item active={ this.isActive(routes.BOOKS) } onClick={() => this.props.changePage(routes.BOOKS)}><Icon name='book' className='left' />Books</Menu.Item>
        <Divider />
        <List id='AppMenuSyntaxHelp'>
          <List.Item style={{ fontSize: '10pt', color: 'lightgrey' }}><span style={{ fontSize: '12pt', fontFamily: 'courier', color: 'darkgrey' }}>[[CODE]]</span> Randomly roll on table CODE and insert result here</List.Item>
          <List.Item style={{ fontSize: '10pt', color: 'lightgrey' }}><span style={{ fontSize: '12pt', fontFamily: 'courier', color: 'darkgrey' }}>[[CODE:+tag1,-tag2]]</span> Add tag1 to the filter, remove tag2, roll on CODE, insert result</List.Item>
          <List.Item style={{ fontSize: '10pt', color: 'lightgrey' }}><span style={{ fontSize: '12pt', fontFamily: 'courier', color: 'darkgrey' }}>[[CODE:-ALL,+tag1]]</span> Remove all tags from the filter, add tag1, roll on CODE, insert result</List.Item>
        </List>
      </Menu>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AppMenu)
