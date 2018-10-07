import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import {
  Card,
  Label,
  List,
  Transition
} from 'semantic-ui-react';
import {TableCodeLabel, TemplateLabel, TemplatePropertyLabel} from './labels'
import './containers.css';

function TemplateCardsGroup(props) {
  return (
    <Card.Group children={props.templates.map(table => <TemplateCard template={teplate} />)} />
  )
}

function TemplateCard(props) {
  return (
    <Transition transitionOnMount='true' animation='fade up'>
      <Card>
        <Card.Content>
          <Card.Header>{props.template.name}</Card.Header>
          <Card.Description>{props.template.description}</Card.Description>
        </Card.Content>
        <Card.Content>
          <List>
            <List.Item><h3>Lorem ipsum [[DOLLAR]] sit amet, consectetur</h3></List.Item>
            <List.Item><p>[[CONSECTETUR]] adipiscing elit</p></List.Item>
            <List.Item><h4>sed do eiusmod [[TEMPOR]] incididunt</h4></List.Item>
            <List.Item><p>See: ####, ####</p></List.Item>
          </List>
        </Card.Content>
        <Card.Content extra>
          <TableCodeLabel code='HEX' />
          <TemplateLabel template='Hexes' />
          <TemplatePropertyLabel property='Columns' value='2' />
          <TemplatePropertyLabel property='Whitespace' value='4' />
        </Card.Content>
      </Card>
    </Transition>
  )
}

export {TemplateCardsGroup}