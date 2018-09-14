import React, {Component} from 'react';
import {
  Button,
  Card,
  Form,
  Header,
  Input,
  Label,
  Modal,
  Transition
} from 'semantic-ui-react';
import routes from '../constants/routes.json'
import './components.css';

function TableSummaryLabels(props) {
  return (
    <Label.Group>
      <Label circular>{props.table.entries.length}</Label>
    </Label.Group>
  );
}

function TableSummaryCard(props) {
  return (
    <Transition transitionOnMount='true' animation='fade up'>
      <Card link onClick={() => props.onClick(routes.TABLE_DETAILS + '/' + props.table.id)}>
        <Card.Content>
          <Card.Header>{props.table.name}</Card.Header>
          <Card.Meta>{props.table.code}</Card.Meta>
          <Card.Description>{props.table.description}</Card.Description>
        </Card.Content>
        <Card.Content extra>
          <TableSummaryLabels table={props.table} />
        </Card.Content>
      </Card>
    </Transition>
  );
}

function TableSummaryCardGroup(props) {
  return (
    <Card.Group children={props.tables.map(table => <TableSummaryCard table={table} onClick={props.onClick} />)} />
  );
}

class TableInputModal extends Component {
  constructor(props) {
    super(props)
    this.state = {
      valueName: '',
      valueCode: '',
      valueDescription: '',
      nameValid: false,
      codeValid: false,
      descriptionValid: false,
      addButtonColor: null,
      addButtonDisabled: true
    }

    this.handleChangeName = this.handleChangeName.bind(this);
    this.handleChangeCode = this.handleChangeCode.bind(this);
    this.handleChangeDescription = this.handleChangeDescription.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
    this.addButtonColor = this.addButtonColor.bind(this);
    this.addButtonDisabled = this.addButtonDisabled.bind(this);
  }

  static defaultProps = {
    open: false,
    onSubmit: (name, code, description) => console.log(`default onSubmit: ${name}; ${code}; ${description}`)
  }

  handleChangeName(event) {
    if (event.target.value) {
      this.setState({valueName: event.target.value, nameValid: true})
    }
    else {
      this.setState({valueName: event.target.value, nameValid: false})
    }
  }

  handleChangeCode(event) {
    if (event.target.value) {
      this.setState({valueCode: event.target.value, codeValid: true})
    }
    else {
      this.setState({valueCode: event.target.value, codeValid: false})
    }
  }

  handleChangeDescription(event) {
    if (event.target.value) {
      this.setState({valueDescription: event.target.value, descriptionValid: true})
    }
    else {
      this.setState({valueDescription: event.target.value, descriptionValid: false})
    }
  }

  handleSubmit() {
    const name = this.state.valueName
    const code = this.state.valueCode
    const description = this.state.valueDescription
    this.setState({valueName: '', valueCode: '', valueDescription: '', nameValid: false, codeValid: false, descriptionValid: false})
    this.props.onSubmit(name, code, description)
  }

  handleClose() {
    this.props.onClose()
  }

  handleCancel() {
    this.setState({valueName: '', valueCode: '', valueDescription: ''})
    this.props.onClose()
  }

  addButtonColor() {
    return ( this.state.nameValid && this.state.codeValid && this.state.descriptionValid ) ? 'blue' : null
  }

  addButtonDisabled() {
    return ( this.state.nameValid && this.state.codeValid && this.state.descriptionValid ) ? false : true
  }

  render() {
    return (
      <Transition animation='fly up' mountOnShow unmountOnHide='true' visible={this.props.open}>
        <Modal size='tiny' open={true} onClose={this.handleClose} className='TableInputModal'>
          <Modal.Header style={{ borderBottom: '0px' }}>
            <Header as='h3' content='Add New Table' />
          </Modal.Header>
          <Modal.Content scrolling>
            <Form>
              <Form.Input 
                label='Name' 
                autoFocus
                transparent
                placeholder='Enter name of table...' 
                value={this.state.valueName}
                onChange={this.handleChangeName} 
              />
              <Form.Input 
                label='CODE' 
                transparent
                placeholder='Enter reference CODE for table...' 
                value={this.state.valueCode}
                onChange={this.handleChangeCode} 
              />
              <Form.Input
                label='Description'
                transparent
                placeholder='Enter description of the table...' 
                value={this.state.valueDescription}
                onChange={this.handleChangeDescription}
              />
            </Form>
          </Modal.Content>
          <Modal.Actions>
            <Button id='TableInputModalCancel' onClick={this.handleCancel}>CANCEL</Button>
            <Button id='TableInputModalSave' color={this.addButtonColor()} disabled={this.addButtonDisabled()} onClick={this.handleSubmit}>ADD</Button>
          </Modal.Actions>
        </Modal>
      </Transition>
    );
  }
}

export { TableSummaryCardGroup, TableInputModal }
