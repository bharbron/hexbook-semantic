function nextIntegerId(ids) {
  // Copying the array first to ensure this is an immutable 
  const sorted_ids = ids.slice().sort()
  return sorted_ids[sorted_ids.length - 1] + 1
}