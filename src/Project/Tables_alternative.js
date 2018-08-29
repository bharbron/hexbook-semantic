import React, { Component } from 'react';
import {
  Breadcrumb,
  Button,
  Card,
  Checkbox,
  Divider,
  Icon,
  Label,
  Popup,
  Segment,
  Table
} from 'semantic-ui-react';
import './Tags.css';

class TagsControls extends Component {
  render() {
    return (
      <div id='TagsControls'>
        <Popup trigger={<Button content='Import' icon='download' />} content='Import tags[s]' />
        <Popup trigger={<Button content='Export' icon='upload' />} content='Export all tags to file or clipboard' />
        <Popup trigger={<Button basic circular icon='trash alternate' negative floated='right'/>} content='Delete selected tag[s]' />
      </div>
    );
  };
};

class TagsWorkspace extends Component {
  render() {
    return (
      <div id='TagsWorkspace'>
        <Card.Group itemsPerRow='1'>
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
                <Label color='green'>Generator</Label>
                <Label color='blue'>Desired<Label.Detail>50</Label.Detail></Label>
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
                <Label color='green'>Generator</Label>
                <Label color='blue'>Desired<Label.Detail>40</Label.Detail></Label>
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

class TagsHelp extends Component {
  render() {
    return (
      <div id='TagsHelp'>
        <h2>Tags</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      </div>
    )
  };
}

export { TagsControls, TagsWorkspace, TagsHelp };