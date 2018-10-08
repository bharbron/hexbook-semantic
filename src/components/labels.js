import React from 'react';
import {
  Icon,
  Label,
} from 'semantic-ui-react';
import './components.css';

function TagLabel(props) {
  return <Label 
    key={props.tag}
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
  return <Label color='violet'><Icon name='puzzle' />{props.template}</Label>
}

function TemplatePluginLabel(props) {
  return <Label color={props.color}>{props.template}</Label>
}

function TemplatePropertyLabel(props) {
  return <Label color='teal'>{props.property}<Label.Detail>{props.value}</Label.Detail></Label>
}

function TagWeightLabel(props) {
  return (
    <Label 
      key={props.id} 
      color={props.color}
      onRemove={props.onRemove}
      content={props.text}
      detail={props.weight}
    />
  )
}

export {TagLabel, TableCodeLabel, TableEntriesCountLabel, TemplateLabel, TemplatePluginLabel, TemplatePropertyLabel, TagWeightLabel}