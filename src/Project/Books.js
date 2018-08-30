import React, { Component } from 'react';
import {
  Breadcrumb,
  Button,
  Card,
  Checkbox,
  Divider,
  Header,
  Icon,
  Input,
  Label,
  List,
  Popup,
  Segment,
  Table,
  Tab
} from 'semantic-ui-react';
import './Books.css';

class BooksLeftWorkspace extends Component {
  render() {
    return (
      <div id='TagsWorkspace'>
        <Card.Group fluid itemsPerRow='1'>
          <Card>
            <Card.Content>
              <Card.Header>Book 1</Card.Header>
              <Card.Description>
                <List bulleted>
                  <List.Item>Size: A5</List.Item>
                </List>
              </Card.Description>
            </Card.Content>
            <Card.Content>
              <List size='large'>
                <List.Item icon='puzzle' header='Hexes' content='Template for printing the list of hexes' />
              </List>
            </Card.Content>
          </Card>

          <Card>
            <Card.Content>
              <Card.Header>Book 2</Card.Header>
              <Card.Description>
                <List bulleted>
                  <List.Item>Size: A5</List.Item>
                </List>
              </Card.Description>
            </Card.Content>
            <Card.Content>
              <List size='large'>
                <List.Item icon='puzzle' header='Key NPCs' content='Template for printing the list of important NPCs' />
                <List.Item icon='puzzle' header='Random NPCs' content='Template for printing additional random NPCs' />
                <List.Item icon='puzzle' header='Magic Items' content='Template for printing an index of magic items' />
              </List>
            </Card.Content>
          </Card>

         </Card.Group> 
      </div>
    );
  };
};

class BooksRightWorkspace extends Component {
  render() {
    const plusContent = 'Tab 1 Content'

    const helpContent = 
      <div>
        <h2>Books</h2>
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

export { BooksLeftWorkspace, BooksRightWorkspace };
