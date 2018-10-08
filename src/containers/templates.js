import React, {Component} from 'react';
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'

import {
  Card,
  Dropdown,
  Label,
  List,
  Transition
} from 'semantic-ui-react';
import {WideColumnWorkspace} from '../components/workspaces'
import {FloatingActionButton, FloatingWorkspaceMenu} from '../components/floatingcontrols'
import {TemplateCardsGroup, TemplateInputModal} from '../components/templates'
import {getByCodeTables} from '../selectors/tables'
import {getByIdTemplates, getByNameTemplates} from '../selectors/templates'
import {getByIdTemplatePlugins, getByNameTemplatePlugins} from '../selectors/templateplugins'

import './containers.css';

const mapStateToProps = state => ({
  tablesByCode: getByCodeTables(state.entities.tables),
  templates: getByIdTemplates(state),
  templatesByName: getByNameTemplates(state),
  templatePluginsByName: getByNameTemplatePlugins(state),
})

const mapDispatchToProps = dispatch => bindActionCreators({
}, dispatch)

class TemplatesWorkspace extends Component {
  state = {
    openTemplateInputModal: false,
  }

  handleClickAddTemplateButton = () => {
    this.setState({openTemplateInputModal: true})
  }

  handleCloseTemplateInputModal = () => {
    this.setState({openTemplateInputModal: false})
  }

  render() {
    return (
      <div id='TemplatesWorkspace'>
        <WideColumnWorkspace>

          <TemplateCardsGroup templates={this.props.templates} />

          <Card.Group itemsPerRow='2' doubling>

          <Transition transitionOnMount='true' animation='fade up'>
            <Card link>
              <Card.Content header='Key NPCs' meta='Template for printing the list of important NPCs' />
              <Card.Content className='TemplateCard'>
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
              <Card.Content className='TemplateCard'>
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

          </Card.Group>

          <TemplateInputModal 
            open={this.state.openTemplateInputModal} 
            onClose={this.handleCloseTemplateInputModal}
            tablesByCode={this.props.tablesByCode} 
            pluginsByName={this.props.templatePluginsByName}
            templatesByName={this.props.templatesByName}
          />

        </WideColumnWorkspace>

        <FloatingWorkspaceMenu>
          <Dropdown.Item text='Import template[s] ...' />
          <Dropdown.Item text='Export templates ...' />
          <Dropdown.Item text='Delete all templates' />
        </FloatingWorkspaceMenu>
        <FloatingActionButton icon='plus' color='google plus' onClick={this.handleClickAddTemplateButton} />
        
      </div>
    );
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TemplatesWorkspace);