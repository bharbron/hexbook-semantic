import React, { Component } from 'react';
import {
  Breadcrumb,
  Button,
  Checkbox,
  Divider,
  Header,
  Icon,
  Segment
} from 'semantic-ui-react';
import './Home.css';

class Home extends Component {
  render() {
    return (
      <div id='Home'>
        <Segment basic textAlign='center' id='HomeSegmentScroll'>
          <Header as='h1' icon>
            <Icon name='map marker alternate' />
              HexPop!
            <Header.Subheader>All your hexes. All your tables. None of your effort.</Header.Subheader>
          </Header>
          <Divider hidden />
          <Button positive as='a' href='/project/tags'>New Project</Button>
        </Segment>  
      </div>
    );
  };
};

export { Home };