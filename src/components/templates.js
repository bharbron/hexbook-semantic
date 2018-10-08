import React, {Component} from 'react';
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {
  Card,
  Label,
  List,
  Transition
} from 'semantic-ui-react';
import {TableCodeLabel, TemplatePluginLabel, TemplatePropertyLabel} from './labels'
import './components.css';

function TemplateCardsGroup(props) {
  return (
    <Card.Group 
      itemsPerRow='2' 
      doubling 
      children={props.templates.map(template => <TemplateCard template={template} plugin={props.plugins[template.pluginId]} />)} 
      className='TemplateCardsGroup' 
    />
  )
}

function TemplateCard(props) {
  const PreviewComponent = props.plugin.preview
  return (
    <Transition transitionOnMount='true' animation='fade up'>
      <Card link className='TemplateCard'>
        <Card.Content header={props.template.name} meta={props.template.description} />
        <Card.Content>
          <PreviewComponent template={props.template} />
        </Card.Content>
        <Card.Content extra>
          <TemplateLabels template={props.template} plugin={props.plugin} />
        </Card.Content>
      </Card>
    </Transition>
  )
}

function TemplateLabels(props) {
  return (
    <Label.Group>
      <TableCodeLabel code={props.template.table} />
      <TemplatePluginLabel template='Index' color={props.plugin.color} />
      {Object.keys(props.template.properties).map(
        p => <TemplatePropertyLabel property={p} value={props.template.properties[p]} />
      )}
    </Label.Group>
  )
}

export {TemplateCardsGroup}