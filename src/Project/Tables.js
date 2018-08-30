import React, { Component } from 'react';
import {
  Button,
  Card,
  Checkbox,
  Divider,
  Form,
  Header,
  Icon,
  Input,
  Label,
  Menu,
  Popup,
  Radio,
  Segment,
  Tab,
  TextArea
} from 'semantic-ui-react';
import './Tables.css';

class TablesLeftWorkspace extends Component {
  render() {
    return (
      <div id='TablesLeftWorkspace'>
        <Card.Group itemsPerRow='3'>
          <Card>
            <Card.Content>
              <Card.Header>Random Encounters</Card.Header>
              <Card.Meta>ENCOUNTERS</Card.Meta>
              <Card.Description>Table for any case where an encounter or NPC needs to be chosen at random.</Card.Description>
            </Card.Content>
            <Card.Content extra>
              <Label.Group>
                <Label circular>50</Label>
              </Label.Group>
            </Card.Content>
          </Card>

          <Card>
            <Card.Content>
              <Card.Header>Treasure</Card.Header>
              <Card.Meta>TREASURE</Card.Meta>
              <Card.Description>List of random valuable items.</Card.Description>
            </Card.Content>
            <Card.Content extra>
              <Label.Group>
                <Label circular>12</Label>
                <Label color='grey'>Static</Label>
                <Label color='green'>Generator<Label.Detail>50</Label.Detail></Label>
              </Label.Group>
            </Card.Content>
          </Card>

          <Card>
            <Card.Content>
              <Card.Header>Magic Iterms</Card.Header>
              <Card.Meta>MAGIC_ITEMS</Card.Meta>
              <Card.Description>Items that hold some kind of magic power.</Card.Description>
            </Card.Content>
            <Card.Content extra>
              <Label.Group>
                <Label circular>10</Label>
                <Label color='grey'>Static</Label>
                <Label color='green'>Generator<Label.Detail>40</Label.Detail></Label>
              </Label.Group>
            </Card.Content>
          </Card>

          <Card>
            <Card.Content>
              <Card.Header>Random Foobar</Card.Header>
              <Card.Meta>FOOBAR</Card.Meta>
              <Card.Description>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Card.Description>
            </Card.Content>
            <Card.Content extra>
              <Label.Group>
                <Label circular>15</Label>
              </Label.Group>
            </Card.Content>
          </Card>

          <Card>
            <Card.Content>
              <Card.Header>Random Foobar</Card.Header>
              <Card.Meta>FOOBAR</Card.Meta>
              <Card.Description>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Card.Description>
            </Card.Content>
            <Card.Content extra>
              <Label.Group>
                <Label circular>15</Label>
              </Label.Group>
            </Card.Content>
          </Card>

          <Card>
            <Card.Content>
              <Card.Header>Random Foobar</Card.Header>
              <Card.Meta>FOOBAR</Card.Meta>
              <Card.Description>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Card.Description>
            </Card.Content>
            <Card.Content extra>
              <Label.Group>
                <Label circular>15</Label>
                <Label color='green'>Generator<Label.Detail>30</Label.Detail></Label>
              </Label.Group>
            </Card.Content>
          </Card>

          <Card>
            <Card.Content>
              <Card.Header>Random Foobar</Card.Header>
              <Card.Meta>FOOBAR</Card.Meta>
              <Card.Description>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Card.Description>
            </Card.Content>
            <Card.Content extra>
              <Label.Group>
                <Label circular>15</Label>
              </Label.Group>
            </Card.Content>
          </Card>

          <Card>
            <Card.Content>
              <Card.Header>Random Foobar</Card.Header>
              <Card.Meta>FOOBAR</Card.Meta>
              <Card.Description>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Card.Description>
            </Card.Content>
            <Card.Content extra>
              <Label.Group>
                <Label circular>15</Label>
              </Label.Group>
            </Card.Content>
          </Card>

          <Card>
            <Card.Content>
              <Card.Header>Random Foobar</Card.Header>
              <Card.Meta>FOOBAR</Card.Meta>
              <Card.Description>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Card.Description>
            </Card.Content>
            <Card.Content extra>
              <Label.Group>
                <Label circular>15</Label>
              </Label.Group>
            </Card.Content>
          </Card>

          <Card>
            <Card.Content>
              <Card.Header>Random Foobar</Card.Header>
              <Card.Meta>FOOBAR</Card.Meta>
              <Card.Description>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Card.Description>
            </Card.Content>
            <Card.Content extra>
              <Label.Group>
                <Label circular>15</Label>
              </Label.Group>
            </Card.Content>
          </Card>

          <Card>
            <Card.Content>
              <Card.Header>Random Foobar</Card.Header>
              <Card.Meta>FOOBAR</Card.Meta>
              <Card.Description>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Card.Description>
            </Card.Content>
            <Card.Content extra>
              <Label.Group>
                <Label circular>15</Label>
              </Label.Group>
            </Card.Content>
          </Card>

          <Card>
            <Card.Content>
              <Card.Header>Random Foobar</Card.Header>
              <Card.Meta>FOOBAR</Card.Meta>
              <Card.Description>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Card.Description>
            </Card.Content>
            <Card.Content extra>
              <Label.Group>
                <Label circular>15</Label>
              </Label.Group>
            </Card.Content>
          </Card>

          <Card>
            <Card.Content>
              <Card.Header>Random Foobar</Card.Header>
              <Card.Meta>FOOBAR</Card.Meta>
              <Card.Description>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Card.Description>
            </Card.Content>
            <Card.Content extra>
              <Label.Group>
                <Label circular>15</Label>
              </Label.Group>
            </Card.Content>
          </Card>

          <Card>
            <Card.Content>
              <Card.Header>Random Foobar</Card.Header>
              <Card.Meta>FOOBAR</Card.Meta>
              <Card.Description>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Card.Description>
            </Card.Content>
            <Card.Content extra>
              <Label.Group>
                <Label circular>15</Label>
              </Label.Group>
            </Card.Content>
          </Card>

          <Card>
            <Card.Content>
              <Card.Header>Random Foobar</Card.Header>
              <Card.Meta>FOOBAR</Card.Meta>
              <Card.Description>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Card.Description>
            </Card.Content>
            <Card.Content extra>
              <Label.Group>
                <Label circular>15</Label>
              </Label.Group>
            </Card.Content>
          </Card>

          <Card>
            <Card.Content>
              <Card.Header>Random Foobar</Card.Header>
              <Card.Meta>FOOBAR</Card.Meta>
              <Card.Description>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Card.Description>
            </Card.Content>
            <Card.Content extra>
              <Label.Group>
                <Label circular>15</Label>
              </Label.Group>
            </Card.Content>
          </Card>

          <Card>
            <Card.Content>
              <Card.Header>Random Foobar</Card.Header>
              <Card.Meta>FOOBAR</Card.Meta>
              <Card.Description>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Card.Description>
            </Card.Content>
            <Card.Content extra>
              <Label.Group>
                <Label circular>15</Label>
              </Label.Group>
            </Card.Content>
          </Card>

          <Card>
            <Card.Content>
              <Card.Header>Random Foobar</Card.Header>
              <Card.Meta>FOOBAR</Card.Meta>
              <Card.Description>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Card.Description>
            </Card.Content>
            <Card.Content extra>
              <Label.Group>
                <Label circular>15</Label>
              </Label.Group>
            </Card.Content>
          </Card>

          <Card>
            <Card.Content>
              <Card.Header>Random Foobar</Card.Header>
              <Card.Meta>FOOBAR</Card.Meta>
              <Card.Description>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Card.Description>
            </Card.Content>
            <Card.Content extra>
              <Label.Group>
                <Label circular>15</Label>
              </Label.Group>
            </Card.Content>
          </Card>

          <Card>
            <Card.Content>
              <Card.Header>Random Foobar</Card.Header>
              <Card.Meta>FOOBAR</Card.Meta>
              <Card.Description>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Card.Description>
            </Card.Content>
            <Card.Content extra>
              <Label.Group>
                <Label circular>15</Label>
              </Label.Group>
            </Card.Content>
          </Card>

          <Card>
            <Card.Content>
              <Card.Header>Random Foobar</Card.Header>
              <Card.Meta>FOOBAR</Card.Meta>
              <Card.Description>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Card.Description>
            </Card.Content>
            <Card.Content extra>
              <Label.Group>
                <Label circular>15</Label>
              </Label.Group>
            </Card.Content>
          </Card>

          <Card>
            <Card.Content>
              <Card.Header>Random Foobar</Card.Header>
              <Card.Meta>FOOBAR</Card.Meta>
              <Card.Description>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Card.Description>
            </Card.Content>
            <Card.Content extra>
              <Label.Group>
                <Label circular>15</Label>
              </Label.Group>
            </Card.Content>
          </Card>

          <Card>
            <Card.Content>
              <Card.Header>Random Foobar</Card.Header>
              <Card.Meta>FOOBAR</Card.Meta>
              <Card.Description>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Card.Description>
            </Card.Content>
            <Card.Content extra>
              <Label.Group>
                <Label circular>15</Label>
              </Label.Group>
            </Card.Content>
          </Card>

          <Card>
            <Card.Content>
              <Card.Header>Random Foobar</Card.Header>
              <Card.Meta>FOOBAR</Card.Meta>
              <Card.Description>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Card.Description>
            </Card.Content>
            <Card.Content extra>
              <Label.Group>
                <Label circular>15</Label>
              </Label.Group>
            </Card.Content>
          </Card>

          <Card>
            <Card.Content>
              <Card.Header>Random Foobar</Card.Header>
              <Card.Meta>FOOBAR</Card.Meta>
              <Card.Description>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Card.Description>
            </Card.Content>
            <Card.Content extra>
              <Label.Group>
                <Label circular>15</Label>
              </Label.Group>
            </Card.Content>
          </Card>

        </Card.Group> 
      </div>
    );
  };
};

class TablesRightWorkspace extends Component {
  render() {
    const plusContent =
      <div>
        <Header as='h1'>Add Table</Header>
        <Form>
          <Form.Field>
            <label>Name</label>
            <input placeholder='Name' />
          </Form.Field>
          <Form.Field>
            <label>Reference Code</label>
            <Input placeholder='CODE' label={{ color: 'grey', content: '[[]]' }} />
          </Form.Field>
          <Form.Field control={TextArea} autoHeight label='Description' placeholder='Describe the purpose of this table...' />
          <Form.Field>
            <Radio toggle label='Static Results' />
          </Form.Field>
          <Form.Field>
            <Radio toggle label='Generate New Entries' />
          </Form.Field>
          <Form.Field control={TextArea} disabled autoHeight label='Generator Text' placeholder='Text to generate new entries with...' />
          <Form.Field>
            <input disabled label='Quantity' placeholder='Auto generate entries until this number is reached.' />
          </Form.Field>
          <Divider hidden />
          <Button primary type='submit'>Add</Button>
        </Form>
      </div>

    const helpContent = 
      <div>
        <h2>Random Tables</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        <h3>Code</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        <h3>Name</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        <h3>Description</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        <h3>Static</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        <h3>No. of Entries</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        <h3>Generator</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        <h3>Desired #</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
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
}

export { TablesLeftWorkspace, TablesRightWorkspace };
