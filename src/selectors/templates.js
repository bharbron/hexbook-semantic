export function getByIdTemplates(stateEntities) {
  const hexesTemplate = getFullTemplateById(stateEntities, 'HEX')
  const otherTemplates = []
  stateEntities.templates.allIds.forEach(
    templateId => {
      const template = getFullTemplateById(stateEntities, templateId)
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

export function getFullTemplateById(stateEntities, id) {
  return {...stateEntities.templates.byId[id]}
}