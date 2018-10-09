export function getByIdTemplatePlugins(state) {
  const templatePlugins = {}
  state.ui.templatePlugins.allIds.forEach(
    id => {
      if (state.ui.templatePlugins.byId[id]) {
        templatePlugins[id] = state.ui.templatePlugins.byId[id]
      }
    }
  )
  return templatePlugins
}

export function getTemplatePluginById(state, id) {
  return {...state.ui.templatePlugins.byId[id]}
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