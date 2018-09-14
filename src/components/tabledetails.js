import React from 'react';
import {
  Dropdown,
  Header,
  Icon,
  Input,
  Label,
  Segment,
  Transition
} from 'semantic-ui-react';
import {SingleLineAdder} from './forms'
import './components.css';

function TableDetailsSegment(props) {
  return (
    <Transition transitionOnMount='true' animation='fade up'>
      <Segment.Group>
        <Segment>
          <Header content={props.table.name} subheader={props.table.description} />
        </Segment>
        <Segment>
        </Segment>
      </Segment.Group>
    </Transition>
  );
}

export { TableDetailsSegment }
