import React, {Component} from 'react';
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {
  Dropdown,
  Icon,
} from 'semantic-ui-react';
import {WideColumnWorkspace} from '../components/workspaces'
import {TagsSegment} from '../components/tags'
import {SingleLineAdderV2} from '../components/forms'
import {getTerrainTags, getTerritoryTags, getOtherTags} from '../selectors/tags'
import {addOtherTag, deleteOtherTag} from '../actions/tags'
import {COLORS} from '../constants/colors'
import {REGEX} from '../constants/regex'
import {ERRORS} from '../constants/strings'
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
  state = {
    valueOther: '',
    validOther: false,
    errorOther: null,
  }

  handleRemoveOther = (tag) => {
    this.props.deleteOtherTag(tag)
  }


  handleSubmitOther = (event) => {
    if (this.state.validOther) {
      const tag = this.state.valueOther
      this.setState({valueOther: '', validOther: false, errorOther: null})
      this.props.addOtherTag(tag.toLowerCase())
    }
  }

  handleChangeOther = (event, {name, value}) => {
    if (value.match(REGEX.EMPTY)) {
      this.setState({valueOther: value, validOther: false, errorOther: null})
      return
    }
    if (value.match(REGEX.TAG_NAME)) {
      this.setState({valueOther: value, validOther: true, errorOther: null})
      return
    }
    this.setState({valueOther: value, validOther: false, errorOther: ERRORS.TAG_INVALID_CHAR})
  }

  handleBlur = (event) => {}

  handleKeyDown = (event) => {
    //exit on escape
    if (event.keyCode === 27) {
      this.setState({valueOther: '', validOther: false, errorOther: null})
    }
  }

  render() {
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
          onRemove={this.handleRemoveOther}
          dropdown={
            <Dropdown icon={<Icon name='ellipsis vertical' color='grey' />} style={{ position: 'absolute', top: '1rem', right: '1rem' }}>
              <Dropdown.Menu direction='left'>
                <Dropdown.Item text='Import tag[s] ...' />
                <Dropdown.Item text='Export tags ...' />
                <Dropdown.Item text='Delete all tags' />
              </Dropdown.Menu>
            </Dropdown>
          }
          adder={
            <SingleLineAdderV2
              name='other'
              placeholder='enter new tag...'
              value={this.state.valueOther}
              valid={this.state.validOther}
              error={this.state.errorOther}
              onSubmit={this.handleSubmitOther}
              onChange={this.handleChangeOther}
              onKeyDown={this.handleKeyDownOther}
              onBlur={this.handleBlurOther}
            />
          }
        />

        </WideColumnWorkspace>
      </div>
    );
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TagsWorkspace)
