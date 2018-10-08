import React, {Component} from 'react';
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {
  List,
} from 'semantic-ui-react';
import {TEMPLATE_PREVIEW} from '../constants/strings'
import './components.css';

function IndexPreview(props) {
  const previewEntryDetails = []
  for (let i = 0; i < props.template.metadata.entryDetails.length; i++) {
    previewEntryDetails.push({
      content: TEMPLATE_PREVIEW.ENTRY_DETAILS[i % TEMPLATE_PREVIEW.ENTRY_DETAILS.length],
      renderAs: props.template.metadata.entryDetails[i],
    })
  }
  return (
    <List className='IndexPreview'>
      <IndexPreviewListItem content={TEMPLATE_PREVIEW.TEXT} renderAs={props.template.metadata.text} />
      {previewEntryDetails.map(
        ped => <IndexPreviewListItem content={ped.content} renderAs={ped.renderAs} />
      )}
      <IndexPreviewListItem content='...' renderAs='p' />
      <IndexPreviewListItem content={TEMPLATE_PREVIEW.REFERENCES} renderAs={props.template.metadata.references} />
    </List>
  )
}

function IndexPreviewListItem(props) {
  const $renderAs = props.renderAs
  return <List.Item><$renderAs>{props.content}</$renderAs></List.Item>
}

export {IndexPreview}