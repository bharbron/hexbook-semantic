import React, {Component} from 'react';
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {
  Dropdown,
  Header,
  Icon,
  Input,
  Label,
  Segment,
  Transition
} from 'semantic-ui-react';
import {WideColumnWorkspace} from '../components/workspaces'
import {TagsSegment} from '../components/tags'
import {getTerrainTags, getTerritoryTags, getOtherTags} from '../selectors/tags'
import {addOtherTag, deleteOtherTag} from '../actions/tags'
import {COLORS} from '../constants/colors'
import './containers.css';

const mapStateToProps = state => ({
  terrainTags: getTerrainTags(state.entities.tags),
  territoryTags: getTerritoryTags(state.entities.tags),
  otherTags: getOtherTags(state.entities.tags),
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
    console.log(`tag ${tag}`)
    this.props.deleteOtherTag(tag)
  }

  render() {
    console.log(`terrainTags: ${this.props.terrainTags}`)
    console.log(`territoryTags: ${this.props.territoryTags}`)
    console.log(`otherTags: ${this.props.otherTags}`)

    return (
      <div id='TagsWorkspace'>
        <WideColumnWorkspace>

        <TagsSegment
          header='Terrain Tags' 
          subheader='Automatically generated and tagged by the hex map. Type of terrain in a given hex. Typically used by random encounter tables.'
          color={COLORS.TERRAIN_TAG}
          tags={this.props.terrainTags}
        />

        <TagsSegment
          header='Territory Tags' 
          subheader='Automatically generated and tagged by the hex map. Group that holds influence in a given hex. Typically used by adventure hook and theme tables.'
          color={COLORS.TERRITORY_TAG}
          tags={this.props.territoryTags}
        />

        <TagsSegment
          header='Other Tags' 
          subheader='Any other user-defined tags that table rolls may by filtered by.'
          color={COLORS.OTHER_TAG}
          tags={this.props.otherTags}
          onSubmit={this.handleSubmitOtherTag}
          placeholder='enter new tag...'
          onRemove={this.handleRemoveOtherTag}
          dropdown={<Dropdown icon={<Icon name='ellipsis vertical' color='grey' />} style={{ position: 'absolute', top: '1rem', right: '1rem' }}>
              <Dropdown.Menu direction='left'>
                <Dropdown.Item text='Import tag[s] ...' />
                <Dropdown.Item text='Export tags ...' />
                <Dropdown.Item text='Delete all tags' />
              </Dropdown.Menu>
            </Dropdown>}
        />

        </WideColumnWorkspace>
      </div>
    );
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TagsWorkspace)
