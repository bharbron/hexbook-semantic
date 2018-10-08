export function getByIdTemplatePlugins(stateUI) {
  const templatePlugins = {}
  stateUI.templatePlugins.allIds.forEach(
    id => {
      if (stateUI.templatePlugins.byId[id]) {
        templatePlugins[id] = stateUI.templatePlugins.byId[id]
      }
    }
  )
  return templatePlugins
}

export function getTemplatePluginById(stateUI, id) {
  return {...stateUI.templatePlugins.byId[id]}
}

export function getByNameTemplatePlugins(state) {
  const stateTemplatePlugins = state.ui.templatePlugins
  const templatePluginsByName = {}
  stateTemplatePlugins.allIds.forEach(
    id => {
      if (stateTemplatePlugins.byId[id]) {
        templatePluginsByName[stateTemplatePlugins.byId[id].name] = stateTemplatePlugins.byId[id]
      }
    }
  )
  return templatePluginsByName
}