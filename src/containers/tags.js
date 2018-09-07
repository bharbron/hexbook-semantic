import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import {
  Dropdown,
  Header,
  Icon,
  Input,
  Label,
  Segment,
  Transition
} from 'semantic-ui-react';
import { WideColumnWorkspace } from '../components/workspaces'
import { getTerrainTags, getTerritoryTags, getOtherTags, TagsSegment } from '../components/tags'

import { addOtherTag, deleteOtherTag } from '../actions/tags'

import './containers.css';

const mapStateToProps = state => ({
  tags: state.entities.tags
})

const mapDispatchToProps = dispatch => bindActionCreators({
  addOtherTag,
  deleteOtherTag
}, dispatch)

class TagsWorkspace extends Component {
  constructor(props) {
    super(props);

    this.handleSubmitOtherTag = this.handleSubmitOtherTag.bind(this)
    this.handleRemoveOtherTag = this.handleRemoveOtherTag.bind(this)
  };

  handleSubmitOtherTag(tag) {
    const tagRegEx = /^[a-z]+$/
    if ( tag.match(tagRegEx) ) {
      this.props.addOtherTag(tag)
    }
  }

  handleRemoveOtherTag(tag) {
    this.props.deleteOtherTag(tag)
  }

  render() {
    const terrainTags = getTerrainTags(this.props.tags)
    const territoryTags = getTerritoryTags(this.props.tags)
    const otherTags = getOtherTags(this.props.tags)
    console.log(`terrainTags: ${terrainTags}`)
    console.log(`territoryTags: ${territoryTags}`)
    console.log(`otherTags: ${otherTags}`)

    return (
      <div id='TagsWorkspace'>
        <WideColumnWorkspace>

        <TagsSegment
          header='Terrain Tags' 
          subheader='Automatically generated and tagged by the hex map. Type of terrain in a given hex. Typically used by random encounter tables.'
          color='olive'
          tags={terrainTags}
        />

        <TagsSegment
          header='Territory Tags' 
          subheader='Automatically generated and tagged by the hex map. Group that holds influence in a given hex. Typically used by adventure hook and theme tables.'
          color='orange'
          tags={territoryTags}
        />

        <TagsSegment
          header='Other Tags' 
          subheader='Any other user-defined tags that table rolls may by filtered by.'
          color='teal'
          tags={otherTags}
          onSubmit={this.handleSubmitOtherTag}
          placeholder='enter new tag...'
          onRemove={this.handleRemoveOtherTag}
        />

        <Transition transitionOnMount='true' animation='fade up'>
          <Segment.Group>
            <Segment>
              <Header content='Other Tags' subheader='Any other user-defined tags that table rolls may by filtered by.' />
            </Segment>
            <Segment>
              <Label.Group tag color='teal'>
                <Label>animal<Icon name='delete' /></Label>
                <Label>day<Icon name='delete' /></Label>
                <Label>edible<Icon name='delete' /></Label>
                <Label>intelligent<Icon name='delete' /></Label>
                <Label>interior<Icon name='delete' /></Label>
                <Label>monarch<Icon name='delete' /></Label>
                <Label>night<Icon name='delete' /></Label>
                <Label>romantic<Icon name='delete' /></Label>
                <Label>unintelligent<Icon name='delete' /></Label>
                <Input
                  icon={<Icon name='circle plus' link />}
                  iconPosition='left'
                  transparent
                  fluid
                  size='large'
                  placeholder='enter new tag...'
                  id='OtherTagsInput'
                />
              </Label.Group>
            </Segment>
            <Dropdown icon={<Icon name='ellipsis vertical' color='grey' />} style={{ position: 'absolute', top: '1rem', right: '1rem' }}>
              <Dropdown.Menu direction='left'>
                <Dropdown.Item text='Import tag[s] ...' />
                <Dropdown.Item text='Export tags ...' />
                <Dropdown.Item text='Delete all tags' />
              </Dropdown.Menu>
            </Dropdown>
          </Segment.Group>
        </Transition>

        </WideColumnWorkspace>
      </div>
    );
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TagsWorkspace)
