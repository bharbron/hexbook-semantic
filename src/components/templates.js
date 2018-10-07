import React, {Component} from 'react';
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {
  Card,
  Label,
  List,
  Transition
} from 'semantic-ui-react';
import {TableCodeLabel, TemplateLabel, TemplatePropertyLabel} from './labels'
import './components.css';

function TemplateCardsGroup(props) {
  return (
    <Card.Group 
      itemsPerRow='2' 
      doubling 
      children={props.templates.map(template => <TemplateCard template={template} />)} 
      className='TemplateCardsGroup' 
    />
  )
}

function TemplateCard(props) {
  return (
    <Transition transitionOnMount='true' animation='fade up'>
      <Card link className='TemplateCard'>
        <Card.Content header={props.template.name} meta={props.template.description} />
        <Card.Content>
          <List>
            <List.Item><h3>Lorem ipsum [[DOLLAR]] sit amet, consectetur</h3></List.Item>
            <List.Item><p>[[CONSECTETUR]] adipiscing elit</p></List.Item>
            <List.Item><h4>sed do eiusmod [[TEMPOR]] incididunt</h4></List.Item>
            <List.Item><p>See: ####, ####</p></List.Item>
          </List>
        </Card.Content>
        <Card.Content extra>
          <TemplateLabels template={props.template} />
        </Card.Content>
      </Card>
    </Transition>
  )
}

function TemplateLabels(props) {
  return (
    <Label.Group>
      <TableCodeLabel code={props.template.table} />
      <TemplateLabel template='Index' />
      {Object.keys(props.template.properties).map(
        p => <TemplatePropertyLabel property={p} value={props.template.properties[p]} />
      )}
    </Label.Group>
  )
}

export {TemplateCardsGroup}