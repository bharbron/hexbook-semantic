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