import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
  Button,
  Card,
  Dropdown,
  Icon,
  Label,
  List,
  Menu
} from 'semantic-ui-react';
import './Templates.css';

class TemplatesWorkspace extends Component {
  render() {
    return (
      <div id='TagsWorkspace'>
        <Card.Group itemsPerRow='2' doubling>

          <Card link>
    		    <Card.Content header='Hexes' meta='Template for printing the list of hexes' />
    		    <Card.Content className='templateCard'>
    		    	<List>
    			      <List.Item><h3>Lorem ipsum [[DOLLAR]] sit amet, consectetur</h3></List.Item>
    			      <List.Item><p>[[CONSECTETUR]] adipiscing elit</p></List.Item>
    			      <List.Item><h4>sed do eiusmod [[TEMPOR]] incididunt</h4></List.Item>
    			      <List.Item><p>See: ####, ####</p></List.Item>
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

          <Card link>
    		    <Card.Content header='Key NPCs' meta='Template for printing the list of important NPCs' />
    		    <Card.Content className='templateCard'>
    		    	<List>
    			      <List.Item><h2>Lorem ipsum [[DOLLAR]] sit amet, consectetur</h2></List.Item>
    			      <List.Item><p>[[CONSECTETUR]] adipiscing elit</p></List.Item>
    			      <List.Item><p>See: ####, ####</p></List.Item>
    			    </List>
    		    </Card.Content>
            <Card.Content extra>
              <Label color='grey'>[[]]<Label.Detail>KEY_NPC</Label.Detail></Label>
              <Label color='violet'>Two Column</Label>
              <Label color='teal'>Whitespace<Label.Detail>6</Label.Detail></Label>
            </Card.Content>
          </Card>

          <Card link>
    		    <Card.Content header='Magic Items' meta='Template for printing an index of magic items' />
    		    <Card.Content className='templateCard'>
              <table>
                <tr><th>d##</th><th>Result</th></tr>
                <tr><td>1-##</td><td><p>Lorem ipsum [[DOLLAR]] sit amet</p></td></tr>
                <tr><td>##-##</td><td><p>Lorem ipsum [[DOLLAR]] sit amet</p></td></tr>
                <tr><td>##</td><td><p>Lorem ipsum [[DOLLAR]] <br/ >sit amet</p></td></tr>
                <tr><td>##-##</td><td><p>Lorem ipsum [[DOLLAR]] sit amet</p></td></tr>
              </table>
    		    </Card.Content>
            <Card.Content extra>
              <Label color='grey'>[[]]<Label.Detail>MAGIC_ITEM</Label.Detail></Label>
              <Label color='yellow'>Random Table</Label>
              <Label color='teal'>Columns<Label.Detail>2</Label.Detail></Label>
            </Card.Content>
          </Card>

          <Card link>
    		    <Card.Content header='Foobars' meta='Template for printing an index of foobars' />
    		    <Card.Content className='templateCard'>
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
        <Menu.Item as={Link} to='/hexes'><Icon name='cube' />Hexes</Menu.Item>
        <Menu.Item as={Link} to='/tags'><Icon name='tags' />Tags</Menu.Item>
        <Menu.Item as={Link} to='/tables'><Icon name='list' />Tables</Menu.Item>
        <Menu.Item as={Link} to='/templates' active={true}><Icon name='puzzle piece' />Templates</Menu.Item>
        <Menu.Item as={Link} to='/books'><Icon name='book' />Books</Menu.Item>
      </div>
    );
  };
};

class TemplatesControls extends Component {
  render() {
    return (
      <div>
        <Dropdown icon={<Icon name='ellipsis vertical' size='big' color='grey' />} style={{ position: 'fixed', top: '2rem', right: '1rem' }} >
            <Dropdown.Menu direction='left'>
              <Dropdown.Item text='Import template[s] ...' />
              <Dropdown.Item text='Export templates ...' />
              <Dropdown.Item text='Delete all templates' />
            </Dropdown.Menu>
          </Dropdown>
        <Button circular color='google plus' size='massive' icon='plus' style={{ position: 'fixed', bottom: '2rem', right: '2rem' }} />
      </div>
    );
  };
};

export { TemplatesWorkspace, TemplatesMenu, TemplatesControls };
