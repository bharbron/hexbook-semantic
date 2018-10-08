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

function IndexPreview(props) {
  return (
    <List className='IndexPreviewRender'>
      <List.Item><h3>Lorem ipsum [[DOLLAR]] sit amet, consectetur</h3></List.Item>
      <List.Item><p>[[CONSECTETUR]] adipiscing elit</p></List.Item>
      <List.Item><h4>sed do eiusmod [[TEMPOR]] incididunt</h4></List.Item>
      <List.Item><p>See: ####, ####</p></List.Item>
    </List>
  )
}

export {IndexPreview}