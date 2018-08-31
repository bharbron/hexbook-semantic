import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
  Breadcrumb,
  Button,
  Card,
  Checkbox,
  Divider,
  Icon,
  Input,
  Label,
  List,
  Menu,
  Popup,
  Segment,
  Table,
  Tab
} from 'semantic-ui-react';
import './Templates.css';

class TemplatesWorkspace extends Component {
  render() {
    return (
      <div id='TagsWorkspace'>
        <Card.Group itemsPerRow='1'>

          <Card raised>
    		    <Card.Content header='Hexes' meta='Template for printing the list of hexes' />
    		    <Card.Content description className='templateCard'>
    		    	<List>
    			      <List.Item><h3>Lorem ipsum [[DOLLAR]] sit amet, consectetur</h3></List.Item>
    			      <List.Item><p>[[CONSECTETUR]] adipiscing elit</p></List.Item>
    			      <List.Item><h4>sed do eiusmod [[TEMPOR]] incididunt</h4></List.Item>
    			      <List.Item><p>See: [[REFERENCES]]</p></List.Item>
    			    </List>
    		    </Card.Content>
            <Card.Content extra>
              <Label color='grey'>[[]]<Label.Detail>HEX</Label.Detail></Label>
              <Label color='violet'>Two Column</Label>
              <Label color='teal'>Whitespace<Label.Detail>4</Label.Detail></Label>
            </Card.Content>
    		  </Card>

    		 </Card.Group> 

    		 <Card.Group itemsPerRow='2' doubling>

          <Card>
    		    <Card.Content header='Key NPCs' meta='Template for printing the list of important NPCs' />
    		    <Card.Content description className='templateCard'>
    		    	<List>
    			      <List.Item><h2>Lorem ipsum [[DOLLAR]] sit amet, consectetur</h2></List.Item>
    			      <List.Item><p>[[CONSECTETUR]] adipiscing elit</p></List.Item>
    			      <List.Item><p>See: [[REFERENCES]]</p></List.Item>
    			    </List>
    		    </Card.Content>
            <Card.Content extra>
              <Label color='grey'>[[]]<Label.Detail>KEY_NPC</Label.Detail></Label>
              <Label color='violet'>Two Column</Label>
              <Label color='teal'>Whitespace<Label.Detail>6</Label.Detail></Label>
            </Card.Content>
          </Card>

          <Card>
    		    <Card.Content header='Magic Items' meta='Template for printing an index of magic items' />
    		    <Card.Content description className='templateCard'>
    		    	<List>
    			      <List.Item><h3>Lorem ipsum [[DOLLAR]] sit amet, consectetur</h3></List.Item>
    			      <List.Item><p>[[CONSECTETUR]] adipiscing elit</p></List.Item>
    			      <List.Item><p>See: [[REFERENCES]]</p></List.Item>
    			    </List>
    		    </Card.Content>
            <Card.Content extra>
              <Label color='grey'>[[]]<Label.Detail>MAGIC_ITEM</Label.Detail></Label>
              <Label color='yellow'>Random Table</Label>
            </Card.Content>
          </Card>

          <Card>
    		    <Card.Content header='Foobars' meta='Template for printing an index of foobars' />
    		    <Card.Content description className='templateCard'>
    		    	<List>
    			      <List.Item><h4>Lorem ipsum [[DOLLAR]] sit amet, consectetur</h4></List.Item>
    			      <List.Item><p>[[CONSECTETUR]] adipiscing elit</p></List.Item>
    			    </List>
    		    </Card.Content>
            <Card.Content extra>
              <Label color='grey'>[[]]<Label.Detail>FOOBAR</Label.Detail></Label>
              <Label color='violet'>One Column</Label>
              <Label color='teal'>Whitespace<Label.Detail>4</Label.Detail></Label>
            </Card.Content>
          </Card>

        </Card.Group> 
      </div>
    );
  };
};

class TemplatesMenu extends Component {
  render() {
    return (
      <div>
        <Menu.Item as={Link} to='/project/hexes'><Icon name='cube' />Hexes</Menu.Item>
        <Menu.Item as={Link} to='/project/tags'><Icon name='tags' />Tags</Menu.Item>
        <Menu.Item as={Link} to='/project/tables'><Icon name='list' />Tables</Menu.Item>
        <Menu.Item as={Link} to='/project/templates' active='true'><Icon name='puzzle piece' />Templates</Menu.Item>
        <Menu.Item as={Link} to='/project/books'><Icon name='book' />Books</Menu.Item>
      </div>
    );
  };
};

class TemplatesControls extends Component {
  render() {
    return (
      <Button circular color='google plus' size='massive' icon='pencil' style={{ position: 'fixed', bottom: '2rem', right: '2rem' }} />
    );
  };
};

export { TemplatesWorkspace, TemplatesMenu, TemplatesControls };
