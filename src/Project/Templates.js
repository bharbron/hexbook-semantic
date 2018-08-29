import React, { Component } from 'react';
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
  Popup,
  Segment,
  Table
} from 'semantic-ui-react';
import './Templates.css';

class TemplatesControls extends Component {
  render() {
    return (
      <div id='TemplatesControls'>
        <Popup trigger={<Button primary content='Import' icon='download' />} content='Import template[s]' />
        <Popup trigger={<Button icon='upload' />} content='Export all templates to file or clipboard' />
      </div>
    );
  };
};

class TemplatesWorkspace extends Component {
  render() {
    return (
      <div id='TagsWorkspace'>
        <Card.Group itemsPerRow='1'>

          <Card color='grey'>
		    <Card.Content header='Hexes' meta='Template for printing the list of hexes' />
		    <Card.Content description>
		    	<List>
			      <List.Item><h3>Lorem ipsum [[DOLLAR]] sit amet, consectetur</h3></List.Item>
			      <List.Item><p>[[CONSECTETUR]] adipiscing elit</p></List.Item>
			      <List.Item><h4>sed do eiusmod [[TEMPOR]] incididunt</h4></List.Item>
			      <List.Item><p>See: [[REFERENCES]]</p></List.Item>
			    </List>
		    </Card.Content>
            <Card.Content extra>
              <Popup trigger={<Icon name='pencil' link />} content='Edit' />
              <Popup trigger={<Icon name='upload' link />} content='Export' />
            </Card.Content>
		  </Card>

		 </Card.Group> 

		 <Card.Group itemsPerRow='2'>

          <Card>
		    <Card.Content header='Key NPCs' meta='Template for printing the list of important NPCs' />
		    <Card.Content description>
		    	<List>
			      <List.Item><h2>Lorem ipsum [[DOLLAR]] sit amet, consectetur</h2></List.Item>
			      <List.Item><p>[[CONSECTETUR]] adipiscing elit</p></List.Item>
			      <List.Item><p>See: [[REFERENCES]]</p></List.Item>
			    </List>
		    </Card.Content>
            <Card.Content extra>
              <Popup trigger={<Icon name='pencil' link />} content='Edit' />
              <Popup trigger={<Icon name='upload' link />} content='Export' />
              <Popup trigger={<Icon name='trash alternate' color='red' link floated='right'/>} content='Delete all territory tags' />
            </Card.Content>
          </Card>

          <Card>
		    <Card.Content header='Magic Items' meta='Template for printing an index of magic items' />
		    <Card.Content description>
		    	<List>
			      <List.Item><h3>Lorem ipsum [[DOLLAR]] sit amet, consectetur</h3></List.Item>
			      <List.Item><p>[[CONSECTETUR]] adipiscing elit</p></List.Item>
			      <List.Item><p>See: [[REFERENCES]]</p></List.Item>
			    </List>
		    </Card.Content>
            <Card.Content extra>
              <Popup trigger={<Icon name='pencil' link />} content='Edit' />
              <Popup trigger={<Icon name='upload' link />} content='Export' />
              <Popup trigger={<Icon name='trash alternate' color='red' link floated='right'/>} content='Delete all territory tags' />
            </Card.Content>
          </Card>

          <Card>
		    <Card.Content header='Foobars' meta='Template for printing an index of foobars' />
		    <Card.Content description>
		    	<List>
			      <List.Item><h4>Lorem ipsum [[DOLLAR]] sit amet, consectetur</h4></List.Item>
			      <List.Item><p>[[CONSECTETUR]] adipiscing elit</p></List.Item>
			    </List>
		    </Card.Content>
            <Card.Content extra>
              <Popup trigger={<Icon name='pencil' link />} content='Edit' />
              <Popup trigger={<Icon name='upload' link />} content='Export' />
              <Popup trigger={<Icon name='trash alternate' color='red' link floated='right'/>} content='Delete all territory tags' />
            </Card.Content>
          </Card>

          <Card>
		    <Card.Content header='Foobars' meta='Template for printing an index of foobars' />
		    <Card.Content description>
		    	<List>
			      <List.Item><h4>Lorem ipsum [[DOLLAR]] sit amet, consectetur</h4></List.Item>
			      <List.Item><p>[[CONSECTETUR]] adipiscing elit</p></List.Item>
			    </List>
		    </Card.Content>
            <Card.Content extra>
              <Popup trigger={<Icon name='pencil' link />} content='Edit' />
              <Popup trigger={<Icon name='upload' link />} content='Export' />
              <Popup trigger={<Icon name='trash alternate' color='red' link floated='right'/>} content='Delete all territory tags' />
            </Card.Content>
          </Card>

        </Card.Group> 
      </div>
    );
  };
};

class TemplatesHelp extends Component {
  render() {
    return (
      <div id='TemplatesHelp'>
        <h2>Templates</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      </div>
    )
  };
}

export { TemplatesControls, TemplatesWorkspace, TemplatesHelp };