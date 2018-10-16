import {getTableById} from './tables'
import {getTemplatePluginById} from './templateplugins'

export function getTemplates(state) {
  const hexesTemplate = getFullTemplateById(state, 'HEX')
  const otherTemplates = []
  state.entities.templates.allIds.forEach(
    templateId => {
      const template = getFullTemplateById(state, templateId)
      if (templateId !== 'HEX' && template) {
        otherTemplates.push(template)
      }
    }
  )
  // TODO: Alphabetize everything but the 'Hexes' template, then put the 'Hexes' template at the head of the array
  return [hexesTemplate].concat(otherTemplates.sort(compareTemplates))
}

function compareTemplates(a, b) {
  /*
  For sorting an array of templates by their template names
  */
  if (a.name < b.name) {
    return -1
  }
  if (a.name > b.name) {
    return 1
  }
  return 0
}

export function getTemplateById(state, id) {
  return {...state.entities.templates.byId[id]}
}

export function getFullTemplateById(state, id) {
  const template = getTemplateById(state, id)
  if (template.table) {
    template.table = getTableById(state, template.table)
  }
  if (template.plugin) {
    template.plugin = getTemplatePluginById(state, template.plugin)
  }
  return template
}

export function getByNameTemplates(state) {
  const templates = {}
  state.entities.templates.allIds.forEach(
    id => {
      const template = getFullTemplateById(state, id)
      if (template) {
        templates[template.name] = template
      }
    }
  )
  return templates
}