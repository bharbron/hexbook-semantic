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
import {addBook, updateBook} from '../actions/books'
import {WideColumnWorkspace} from '../components/workspaces'
import {FloatingActionButton} from '../components/floatingcontrols'
import {BookCardsGroup, BookInputModal} from '../components/books'
import {getBooks, getByNameBooks} from '../selectors/books'
import {getByNameTemplates} from '../selectors/templates'
import './containers.css';

const mapStateToProps = state => ({
  books: getBooks(state),
  booksByName: getByNameBooks(state),
  templatesByName: getByNameTemplates(state), 
})

const mapDispatchToProps = dispatch => bindActionCreators({
  addBook,
  updateBook,
}, dispatch)

class BooksWorkspace extends Component {
  state = {
    openBookInputModal: false,
  }

  handleSubmitSetting = (setting, value, book) => {
    const newBook = {...book}
    const prevBook = {...book}
    newBook[setting] = value
    this.props.updateBook(newBook, prevBook)
  }

  handleSubmitTemplate = (template, book) => {
    const newBook = {
      ...book,
      templates: [...book.templates, template]
    }
    const prevBook = {...book}
    this.props.updateBook(newBook, prevBook)
  }

  handleRemoveTemplate = (template, book) => {
    const newBook = {
      ...book,
      templates: [...book.templates.filter(t => t.id !== template.id)]
    }
    const prevBook = {...book}
    this.props.updateBook(newBook, prevBook)
  }

  handleClickAddBookButton = () => {
    this.setState({openBookInputModal: true})
  }

  handleCloseBookInputModal = () => {
    this.setState({openBookInputModal: false})
  }

  handleSubmitBookInputModal = (name, size) => {
    this.setState({openBookInputModal: false})
    this.props.addBook(name, size)
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
              <Card>
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
          <BookInputModal 
            open={this.state.openBookInputModal}
            onClose={this.handleCloseBookInputModal}
            onSubmit={this.handleSubmitBookInputModal}
            booksByName={this.props.booksByName}
          />
        </WideColumnWorkspace>

        <FloatingActionButton icon='plus' color='google plus' onClick={this.handleClickAddBookButton} />

      </div>
    );
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BooksWorkspace);