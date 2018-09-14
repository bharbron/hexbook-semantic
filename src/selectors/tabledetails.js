function getTableId(router) {
  const pathParts = router.location.pathname.split('/')
  return pathParts[pathParts.length - 1]
}

function getTableDetailsById(stateEntities, id) {
  return stateEntities.tables.byId[id]
}

export {getTableId, getTableDetailsById}