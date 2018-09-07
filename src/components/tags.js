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
  return <Label content={props.tag} />
}

function TagsSegment(props) {
  return (
    <Transition transitionOnMount='true' animation='fade up'>
      <Segment.Group>
        <Segment>
          <Header content={props.header} subheader={props.subheader} />
        </Segment>
        <Segment>
          <Label.Group tag color={props.color} children={ props.tags.map( (tag) => <TagLabel tag={tag} /> ) } />
        </Segment>
      </Segment.Group>
    </Transition>
  );
}

export { getTerrainTags, getTerritoryTags, getOtherTags, TagsSegment }