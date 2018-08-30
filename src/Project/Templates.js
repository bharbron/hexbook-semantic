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
  Table,
  Tab
} from 'semantic-ui-react';
import './Templates.css';

class TemplatesLeftWorkspace extends Component {
  render() {
    return (
      <div id='TagsWorkspace'>
        <Card.Group fluid itemsPerRow='1'>

          <Card color='olive'>
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
              <Label color='blue'>Columns<Label.Detail>2</Label.Detail></Label>
              <Label color='teal'>Whitespace<Label.Detail>4</Label.Detail></Label>
            </Card.Content>
    		  </Card>

		 </Card.Group> 

		 <Card.Group fluid itemsPerRow='2'>

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
              <Label color='teal'>Whitespace<Label.Detail>4</Label.Detail></Label>
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

class TemplatesRightWorkspace extends Component {
  render() {
    const plusContent = 'Tab 1 Content'

    const helpContent = 
      <div>
        <h2>Templates</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      </div>

    const panes = [
      { menuItem: { icon: 'plus' }, render: () => <Tab.Pane attached={false} className='workspace_tab_pane'>{plusContent}</Tab.Pane> },
      { menuItem: { icon: 'code' }, render: () => <Tab.Pane attached={false} className='workspace_tab_pane'>Tab 2 Content</Tab.Pane> },
      { menuItem: { icon: 'download' }, render: () => <Tab.Pane attached={false} className='workspace_tab_pane'>Tab 3 Content</Tab.Pane> },
      { menuItem: { icon: 'upload' }, render: () => <Tab.Pane attached={false} className='workspace_tab_pane'>Tab 4 Content</Tab.Pane> },
      { menuItem: { icon: 'help' }, render: () => <Tab.Pane attached={false} className='workspace_tab_pane'>{helpContent}</Tab.Pane> },
    ];

    return (
      <Tab menu={{ pointing: true }} panes={panes} className='workspace_tab'/>
    );
  };
};

export { TemplatesLeftWorkspace, TemplatesRightWorkspace };
