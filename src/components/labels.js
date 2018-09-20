import React from 'react';
import {
  Icon,
  Label,
} from 'semantic-ui-react';
import './components.css';

function TagLabel(props) {
  return <Label 
    content={props.tag}
    onRemove={ (props.onRemove) ? () => props.onRemove(props.tag) : undefined }
    color={props.color}
  />
}

function TableCodeLabel(props) {
  return <Label color='grey'>[[]]<Label.Detail>{props.code}</Label.Detail></Label>
}

function TableEntriesCountLabel(props) {
  return <Label circular>{props.count}</Label>
}

function TemplateLabel(props) {
  return <Label color='violet'><Icon name='puzzle' /><Label.Detail>{props.template}</Label.Detail></Label>
}

function TagWeightLabel(props) {
  return (
    <Label 
      key={props.id} 
      color={props.color}
      onRemove={props.onRemove}
      content={props.name}
      detail={props.weight}
    />
  )
}

export {TagLabel, TableCodeLabel, TableEntriesCountLabel, TemplateLabel, TagWeightLabel}