function nextIntegerId(ids) {
  if (ids.length == 0) {
    return 1
  }

  // Copying the array first to ensure this is an immutable 
  const sorted_ids = ids.slice().sort()
  return sorted_ids[sorted_ids.length - 1] + 1
}

export { nextIntegerId }