import React from 'react';
import {
  Header,
  Label,
  Segment,
  Transition
} from 'semantic-ui-react';
import {TagLabel} from './labels'
import './components.css';

function TagsSegment(props) {
  return (
    <Transition transitionOnMount='true' animation='fade up'>
      <Segment.Group className='TagsSegment'>
        <Segment>
          <Header content={props.header} subheader={props.subheader} />
        </Segment>
        <Segment>
          <Label.Group tag size='large' color={props.color}>
            {props.tags.map((tag) => <TagLabel tag={tag} onRemove={props.onRemove} />)}
          </Label.Group>
          {props.adder}
        </Segment>
        {props.dropdown}
      </Segment.Group>
    </Transition>
  );
}

export {TagsSegment}