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
  Menu,
  Popup,
  Segment,
  Table,
  Tab
} from 'semantic-ui-react';
import './Tags.css';

class TagsLeftWorkspace extends Component {
  render() {
    return (
      <div id='TagsLeftWorkspace'>
        <Card.Group itemsPerRow='1'>

          <Card>
            <Card.Content header='Terrain Tags' meta='Type of terrain in a given hex. Typically used to determine random encounters.' />
            <Card.Content>
              <Card.Description>
                <Label.Group tag color='green'>
                  <Label>grasslands</Label>
                  <Label>forest</Label>
                  <Label>hills</Label>
                  <Label>mountains</Label>
                  <Label>desert</Label>
                  <Label>swamp</Label>
                </Label.Group>
              </Card.Description>
            </Card.Content>
          </Card>

          <Card>
            <Card.Content header='Territory Tags' meta='Group that holds influence in a given hex. Typically used to determine adventure hooks and themes.' />
            <Card.Content>
              <Card.Description>
                <Label.Group tag color='orange'>
                  <Label>goblins</Label>
                  <Label>dwarves</Label>
                  <Label>imperial</Label>
                  <Label>fae</Label>
                </Label.Group>
              </Card.Description>
            </Card.Content>
          </Card>

          <Card>
            <Card.Content>
              <Card.Header>Other Tags</Card.Header>
              <Card.Meta>Any other tags that table rolls may by filtered by.</Card.Meta>
            </Card.Content>
            <Card.Content>
              <Card.Description>
                <Label.Group tag color='teal'>
                  <Label>intelligent<Icon name='delete' /></Label>
                  <Label>animal<Icon name='delete' /></Label>
                  <Label>unintelligent<Icon name='delete' /></Label>
                  <Label>romantic<Icon name='delete' /></Label>
                  <Label>edible<Icon name='delete' /></Label>
                  <Icon size='large' name='plus circle' />
                </Label.Group>
              </Card.Description>
            </Card.Content>
          </Card>

        </Card.Group> 
      </div>
    );
  };
};

class TagsRightWorkspace extends Component {
  render() {
    const helpContent = 
      <div>
        <h2>Tags</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      </div>

    const panes = [
      { menuItem: { icon: 'plus' }, render: () => <Tab.Pane attached={false}>Tab 1 Content</Tab.Pane> },
      { menuItem: { icon: 'code' }, render: () => <Tab.Pane attached={false}>Tab 2 Content</Tab.Pane> },
      { menuItem: { icon: 'download' }, render: () => <Tab.Pane attached={false}>Tab 3 Content</Tab.Pane> },
      { menuItem: { icon: 'upload' }, render: () => <Tab.Pane attached={false}>Tab 4 Content</Tab.Pane> },
      { menuItem: { icon: 'help' }, render: () => <Tab.Pane attached={false} className='workspace_tab_pane'>{helpContent}</Tab.Pane> },
    ];

    return (
      <Tab menu={{ pointing: true }} panes={panes} className='workspace_tab' />
    );
  };
};

export { TagsLeftWorkspace, TagsRightWorkspace };
