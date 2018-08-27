import React, { Component } from 'react';
import {
  Button,
  Checkbox,
  Container,
  Grid,
  Header,
  Icon,
  Image,
  Input,
  Label,
  Menu,
  Sidebar,
  Segment,
  Sticky,
  Table
} from 'semantic-ui-react'
import './App.css'

class App extends Component {
  render() {
    return (
      <Grid>
        <Menu fixed='top' pointing inverted>
          <Container>
            <Menu.Item as='a'>
              <Icon name='book' />
              Book
            </Menu.Item>
            <Menu.Item as='a'>
              <Icon name='th list' />
              Indexes
            </Menu.Item>
            <Menu.Item as='a' active='true'>
              <Icon name='random' />
              Random Tables
            </Menu.Item>
          </Container>
        </Menu>

        <Grid.Row style={{ marginTop: '5rem' }}>
          <Container>
            <Button primary>
              Add Table
            </Button>
            <Button>
              Import Table[s]
            </Button>
          </Container>
        </Grid.Row>

        <Grid.Row>
          <Container>
            <Table selectable>
              <Table.Header>
                <Table.Row>
                  <Table.HeaderCell />
                  <Table.HeaderCell>Code</Table.HeaderCell>
                  <Table.HeaderCell>Name</Table.HeaderCell>
                  <Table.HeaderCell>Description</Table.HeaderCell>
                </Table.Row>
              </Table.Header>

              <Table.Body>
                <Table.Row>
                  <Table.Cell collapsing><Checkbox /></Table.Cell>
                  <Table.Cell>ENCOUNTERS</Table.Cell>
                  <Table.Cell>Random Encounters</Table.Cell>
                  <Table.Cell>Table for any case where an encounter or NPC needs to be chosen at random.</Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell collapsing><Checkbox /></Table.Cell>
                  <Table.Cell>TREASURE</Table.Cell>
                  <Table.Cell>Treasures</Table.Cell>
                  <Table.Cell>List of random valuable items.</Table.Cell>
                </Table.Row>
                <Table.Row>
                  <Table.Cell collapsing><Checkbox /></Table.Cell>
                  <Table.Cell>MAGIC_ITEMS</Table.Cell>
                  <Table.Cell>Magic Items</Table.Cell>
                  <Table.Cell>Items that hold some kind of magic power.</Table.Cell>
                </Table.Row>
              </Table.Body>
              <Table.Footer>
                <Table.Row>
                  <Table.HeaderCell colSpan='4'>
                    <Button floated='right'>Delete Selected</Button>
                  </Table.HeaderCell>
                </Table.Row>
              </Table.Footer>
            </Table>
          </Container>
        </Grid.Row>

        <Grid.Row>
          <Container text>
            <Segment>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ac turpis egestas integer eget aliquet nibh praesent tristique. Nulla aliquet porttitor lacus luctus accumsan tortor posuere. Pulvinar sapien et ligula ullamcorper malesuada. Nisi est sit amet facilisis magna etiam tempor. Velit sed ullamcorper morbi tincidunt ornare massa. Consectetur adipiscing elit ut aliquam purus. Fermentum posuere urna nec tincidunt praesent semper feugiat nibh. Rhoncus urna neque viverra justo nec ultrices dui. In ante metus dictum at tempor commodo ullamcorper. Rutrum tellus pellentesque eu tincidunt tortor. Elementum integer enim neque volutpat ac. Tempor orci eu lobortis elementum nibh tellus molestie nunc non. Vitae auctor eu augue ut lectus arcu. Augue neque gravida in fermentum. Lectus mauris ultrices eros in cursus turpis massa. Sit amet consectetur adipiscing elit ut aliquam purus. Porta nibh venenatis cras sed felis eget velit aliquet sagittis. Facilisi cras fermentum odio eu feugiat pretium. Gravida quis blandit turpis cursus.Ac placerat vestibulum lectus mauris ultrices. Aenean pharetra magna ac placerat vestibulum. Tempus iaculis urna id volutpat. Egestas sed sed risus pretium quam vulputate dignissim. Nam libero justo laoreet sit amet cursus sit. Quis vel eros donec ac odio tempor. Ut diam quam nulla porttitor massa. Feugiat scelerisque varius morbi enim. Pharetra et ultrices neque ornare aenean euismod elementum nisi. Id nibh tortor id aliquet lectus proin. Nibh nisl condimentum id venenatis a condimentum vitae. Turpis cursus in hac habitasse platea dictumst quisque sagittis purus. Faucibus vitae aliquet nec ullamcorper sit amet. At volutpat diam ut venenatis. Volutpat odio facilisis mauris sit amet massa. Sed vulputate odio ut enim. Elementum nisi quis eleifend quam adipiscing vitae. Odio morbi quis commodo odio aenean sed. Enim ut tellus elementum sagittis vitae et leo.Id diam maecenas ultricies mi eget mauris pharetra et. Turpis in eu mi bibendum neque egestas congue quisque egestas. Ut lectus arcu bibendum at varius vel pharetra vel. At risus viverra adipiscing at in tellus. In eu mi bibendum neque egestas congue quisque egestas. Sed vulputate odio ut enim blandit volutpat maecenas. Auctor urna nunc id cursus metus aliquam eleifend mi in. Turpis massa tincidunt dui ut ornare. Venenatis lectus magna fringilla urna porttitor rhoncus dolor purus non. Egestas diam in arcu cursus euismod quis viverra nibh. Malesuada nunc vel risus commodo viverra maecenas accumsan lacus. Volutpat est velit egestas dui id. Proin sagittis nisl rhoncus mattis rhoncus urna neque viverra. Placerat in egestas erat imperdiet. Mauris ultrices eros in cursus turpis massa tincidunt. Malesuada proin libero nunc consequat interdum varius. Enim ut sem viverra aliquet eget. Aenean sed adipiscing diam donec adipiscing tristique risus. Vitae turpis massa sed elementum tempus. Tristique senectus et netus et.Dapibus ultrices in iaculis nunc sed augue. Urna neque viverra justo nec ultrices dui sapien eget mi. Elementum sagittis vitae et leo duis. Quis vel eros donec ac. Rhoncus dolor purus non enim praesent elementum facilisis. Sed sed risus pretium quam vulputate. Maecenas pharetra convallis posuere morbi. Varius duis at consectetur lorem donec massa sapien faucibus et. Ligula ullamcorper malesuada proin libero nunc consequat interdum varius. Porttitor leo a diam sollicitudin tempor id eu. Orci eu lobortis elementum nibh tellus molestie. Eu turpis egestas pretium aenean.Eget duis at tellus at urna condimentum mattis. In ornare quam viverra orci sagittis eu. Ut ornare lectus sit amet est placerat in egestas. Scelerisque viverra mauris in aliquam sem. Maecenas sed enim ut sem viverra aliquet. Dis parturient montes nascetur ridiculus mus mauris vitae. Pellentesque id nibh tortor id aliquet lectus proin nibh nisl. Tincidunt tortor aliquam nulla facilisi cras fermentum odio eu feugiat. Magna eget est lorem ipsum. Lorem mollis aliquam ut porttitor leo a diam. Tristique risus nec feugiat in fermentum posuere urna. Et pharetra pharetra massa massa ultricies mi quis hendrerit dolor. A diam sollicitudin tempor id. Egestas erat imperdiet sed euismod nisi porta lorem mollis aliquam. Viverra orci sagittis eu volutpat odio facilisis mauris. Aliquam ultrices sagittis orci a. Platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras. Vel risus commodo viverra maecenas accumsan lacus vel facilisis volutpat. Orci eu lobortis elementum nibh tellus.</p>
            </Segment>
          </Container>
        </Grid.Row>
      </Grid>
    )
  };
}

export default App