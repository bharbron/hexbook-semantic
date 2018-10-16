import React, {Component} from 'react';
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {
  Button,
  Card,
  Dropdown,
  Icon,
  List,
  Progress,
  Select,
  Transition
} from 'semantic-ui-react';
import {WideColumnWorkspace} from '../components/workspaces'
import {FloatingActionButton} from '../components/floatingcontrols'
import {BookCardsGroup} from '../components/books'
import {getBooks} from '../selectors/books'
import {getByNameTemplates} from '../selectors/templates'
import './containers.css';

const mapStateToProps = state => ({
  books: getBooks(state),
  templatesByName: getByNameTemplates(state), 
})

const mapDispatchToProps = dispatch => bindActionCreators({
}, dispatch)

class BooksWorkspace extends Component {
  state = {}

  handleSubmitSetting = (setting, value, book) => {
    alert('containers.books.BooksWorkspace.handleSubmitSetting')
  }

  handleSubmitTemplate = (template, book) => {
    alert('containers.books.BooksWorkspace.handleSubmitTemplate')
  }

  handleRemoveTemplate = (template, book) => {
    alert('containers.books.BooksWorkspace.handleRemoveTemplate')
  }

  render() {
    console.log('containers.books.BooksWorkspace')
    console.log('this.props')
    console.log(this.props)
    return (
      <div id='BooksWorkspace'>
        <WideColumnWorkspace>
          <BookCardsGroup 
            books={this.props.books} 
            templatesByName={this.props.templatesByName} 
            onSubmitSetting={this.handleSubmitSetting}
            onSubmitTemplate={this.handleSubmitTemplate}
            onRemoveTemplate={this.handleRemoveTemplate}
          />


          <Card.Group itemsPerRow='2' doubling>

          <Transition transitionOnMount='true' animation='fade up'>
            <Card raised>
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
                  <List.Item>
                    <List.Icon name='puzzle' size='big' />
                    <List.Content>
                      <List.Header>Key NPCs</List.Header>
                      <List.Description>Template for printing the list of important NPCs <Icon link name='minus circle' color='grey' /></List.Description>
                    </List.Content>
                  </List.Item>
                  <List.Item>
                    <List.Icon name='puzzle' size='big' />
                    <List.Content>
                      <List.Header>Random NPCs</List.Header>
                      <List.Description>Template for printing additional random NPCs <Icon link name='minus circle' color='grey' /></List.Description>
                    </List.Content>
                  </List.Item>
                  <List.Item>
                    <List.Icon name='puzzle' size='big' />
                    <List.Content>
                      <List.Header>Magic Items</List.Header>
                      <List.Description>Template for printing an index of magic items <Icon link name='minus circle' color='grey' /></List.Description>
                    </List.Content>
                  </List.Item>
                </List>
                <Icon link name='plus circle' size='large' color='grey' />
                <Select placeholder='Select a template' />
              </Card.Content>
              <Dropdown icon={<Icon name='ellipsis vertical' color='grey' />} style={{ position: 'absolute', top: '1rem', right: '1rem' }}>
                <Dropdown.Menu direction='left'>
                  <Dropdown.Item text='Delete this book' />
                </Dropdown.Menu>
              </Dropdown>
            </Card>
          </Transition>

          <Transition transitionOnMount='true' animation='fade up'>
            <Card raised>
              <Card.Content>
                <Card.Header>Finalize</Card.Header>
                <Card.Description>
                  <Button circular icon='play' color='blue' size='large' />
                </Card.Description>
              </Card.Content>
              <Progress percent={70} indicating attached='bottom' />
            </Card>
          </Transition>

          </Card.Group>
        </WideColumnWorkspace>

        <FloatingActionButton icon='plus' color='google plus' />

      </div>
    );
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BooksWorkspace);