import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import {
  Card,
  Dropdown,
  Label,
  List,
  Transition
} from 'semantic-ui-react';
import { WideColumnWorkspace } from '../components/workspaces'
import { FloatingActionButton, FloatingWorkspaceMenu } from '../components/floatingcontrols'

import './containers.css';

const mapStateToProps = state => ({
})

const mapDispatchToProps = dispatch => bindActionCreators({
}, dispatch)

class TemplatesWorkspace extends Component {
  render() {
    return (
      <div id='TemplatesWorkspace'>
        <WideColumnWorkspace>

          <Card.Group itemsPerRow='2' doubling>

          <Transition transitionOnMount='true' animation='fade up'>
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
          </Transition>

          </Card.Group> 

          <Card.Group itemsPerRow='2' doubling>

          <Transition transitionOnMount='true' animation='fade up'>
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
          </Transition>

          <Transition transitionOnMount='true' animation='fade up'>
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
          </Transition>

          <Transition transitionOnMount='true' animation='fade up'>
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
          </Transition>

          </Card.Group> 
        </WideColumnWorkspace>

        <FloatingWorkspaceMenu>
          <Dropdown.Item text='Import template[s] ...' />
          <Dropdown.Item text='Export templates ...' />
          <Dropdown.Item text='Delete all templates' />
        </FloatingWorkspaceMenu>
        <FloatingActionButton icon='plus' color='google plus' />
        
      </div>
    );
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TemplatesWorkspace);
