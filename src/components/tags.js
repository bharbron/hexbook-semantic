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
import { SingleLineAdder } from './forms'

import './components.css';

function getTerrainTags(tags) { 
  return tags.allIds.filter(id => tags.byId[id].terrainHexes.length > 0 ).sort() 
};

function getTerritoryTags(tags) {
  return tags.allIds.filter(id => tags.byId[id].territoryHexes.length > 0 ).sort()
};

function getOtherTags(tags) {
  return tags.allIds.filter(id => tags.byId[id].otherTag == true ).sort()
};

function TagLabel(props) {
  return <Label 
    content={props.tag}
    onRemove={ (props.onRemove) ? () => props.onRemove(props.tag) : undefined }
  />
}

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
            { props.onSubmit && <SingleLineAdder onSubmit={props.onSubmit} placeholder={props.placeholder} /> }
          </Label.Group>
        </Segment>
      </Segment.Group>
    </Transition>
  );
}

export { getTerrainTags, getTerritoryTags, getOtherTags, TagsSegment }