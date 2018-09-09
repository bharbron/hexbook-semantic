import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import {
  Card,
  Dropdown,
  Label
} from 'semantic-ui-react';
import { WideColumnWorkspace } from '../components/workspaces'
import { FloatingActionButton, FloatingWorkspaceMenu } from '../components/floatingcontrols'
import { TableSummaryCardGroup } from '../components/tables'

import './containers.css';

const mapStateToProps = state => ({
})

const mapDispatchToProps = dispatch => bindActionCreators({
}, dispatch)

class TablesWorkspace extends Component {
  render() {
    return (
      <div id='TablesWorkspace'>
        <WideColumnWorkspace>
          <Card.Group>
            <TableSummaryCard name='Component Test' code='TEST' description='Testing the new TableSummaryCard component' />

            <Card link>
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

            <Card link>
              <Card.Content>
                <Card.Header>Treasure</Card.Header>
                <Card.Meta>TREASURE</Card.Meta>
                <Card.Description>List of random valuable items.</Card.Description>
              </Card.Content>
              <Card.Content extra>
                <Label.Group>
                  <Label circular>12</Label>
                  <Label color='grey'>Static</Label>
                  <Label color='olive'>Generator<Label.Detail>50</Label.Detail></Label>
                </Label.Group>
              </Card.Content>
            </Card>

            <Card link>
              <Card.Content>
                <Card.Header>Magic Items</Card.Header>
                <Card.Meta>MAGIC_ITEMS</Card.Meta>
                <Card.Description>Items that hold some kind of magic power.</Card.Description>
              </Card.Content>
              <Card.Content extra>
                <Label.Group>
                  <Label circular>10</Label>
                  <Label color='grey'>Static</Label>
                  <Label color='olive'>Generator<Label.Detail>40</Label.Detail></Label>
                </Label.Group>
              </Card.Content>
            </Card>

            <Card link>
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

            <Card link>
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

            <Card link>
              <Card.Content>
                <Card.Header>Random Foobar</Card.Header>
                <Card.Meta>FOOBAR</Card.Meta>
                <Card.Description>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Card.Description>
              </Card.Content>
              <Card.Content extra>
                <Label.Group>
                  <Label circular>15</Label>
                  <Label color='olive'>Generator<Label.Detail>30</Label.Detail></Label>
                </Label.Group>
              </Card.Content>
            </Card>

            <Card link>
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

            <Card link>
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

            <Card link>
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

            <Card link>
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

            <Card link>
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

            <Card link>
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

            <Card link>
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

            <Card link>
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

            <Card link>
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

            <Card link>
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

            <Card link>
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

            <Card link>
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

            <Card link>
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

            <Card link>
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

            <Card link>
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

            <Card link>
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

            <Card link>
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

            <Card link>
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

            <Card link>
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
        </WideColumnWorkspace>

        <FloatingWorkspaceMenu>
          <Dropdown.Item text='Import table[s] ...' />
          <Dropdown.Item text='Export tables ...' />
          <Dropdown.Item text='Delete all tables' />
        </FloatingWorkspaceMenu>
        <FloatingActionButton icon='plus' color='google plus' />
        
      </div>
    );
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TablesWorkspace)