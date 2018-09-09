import React from 'react';
import {
  Dropdown,
  Header,
  Icon,
  Label,
  Segment,
  Transition
} from 'semantic-ui-react';
import { SingleLineAdder } from './forms'
import { ListWithDeletableItems } from './lists'

import './components.css';

function getHexDefinitions(entryDetailsGroups, entryDetails) {
  console.log('getHexDefinitions')
  console.log(entryDetailsGroups)
  console.log(entryDetails)
  const hexDefinitionsIds = entryDetailsGroups.byId['HEX'].entryDetails
  const hexDefinitions = []
  for (let i = 0; i < hexDefinitionsIds.length; i++) {
    hexDefinitions.push(entryDetails.byId[hexDefinitionsIds[i]])
  }
  console.log(hexDefinitions)
  return hexDefinitions
};

function HexDefinitionSegment(props) {
  return (
    <Transition transitionOnMount='true' animation='fade up'>
      <Segment.Group>
        <Segment>
          <Header content='Hex Definition' subheader='What details should be randomly generated for each hex.' />
        </Segment>
        <Segment>
          <ListWithDeletableItems 
            bulleted='true' 
            items={ 
              props.hexDefinitions.map(
                (hexDefinition) => ({
                  key: hexDefinition.id, 
                  content: hexDefinition.text, 
                  onClick: () => props.onDeleteHexDefinition(hexDefinition.id)
                })
              )
            }
          />
          <SingleLineAdder
            onSubmit={props.onSubmitHexDefinition}
            name='hex_definition'
            placeholder='Enter [[NEW]] hex detail...'
          />
        </Segment>
        <Segment>
          <Label color='grey'>[[]]<Label.Detail>HEX</Label.Detail></Label>
        </Segment>
        <Dropdown icon={<Icon name='ellipsis vertical' color='grey' />} style={{ position: 'absolute', top: '1rem', right: '1rem' }}>
          <Dropdown.Menu direction='left'>
            <Dropdown.Item text='Import definition ...' />
            <Dropdown.Item text='Export definition ...' />
          </Dropdown.Menu>
        </Dropdown>
      </Segment.Group>
    </Transition>
  );
}

export { getHexDefinitions, HexDefinitionSegment }
