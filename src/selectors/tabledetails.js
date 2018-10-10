function getTableIdFromRoute(router) {
  const pathParts = router.location.pathname.split('/')
  return pathParts[pathParts.length - 1]
}

export {getTableIdFromRoute}