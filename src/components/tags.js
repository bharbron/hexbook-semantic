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
import {TagLabel} from './labels'
import './components.css';

function TagsSegment(props) {
  return (
    <Transition transitionOnMount='true' animation='fade up'>
      <Segment.Group>
        <Segment>
          <Header content={props.header} subheader={props.subheader} />
        </Segment>
        <Segment>
          <Label.Group tag color={props.color}>
            { props.tags.map( (tag) => <TagLabel tag={tag} onRemove={props.onRemove} /> ) }
          </Label.Group>
          { props.onSubmit && <SingleLineAdder onSubmit={props.onSubmit} placeholder={props.placeholder} /> }
        </Segment>
        { props.dropdown }
      </Segment.Group>
    </Transition>
  );
}

export { TagsSegment }