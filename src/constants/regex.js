export const REGEX = {
  EMPTY: /^$/,
  INTEGER: /^0$|^[1-9]+[0-9]*$/,
  HEX_MAP_COORDINATES: /^[A-Za-z0-9]+$/,
  HEX_MAP_TERRAIN: /^[A-Za-z]*$/,
  HEX_MAP_TERRITORY: /^[A-Za-z]*$/,
  TABLE_ENTRY: /^0,.+$|^[1-9]+[0-9]*,.+$/,
  TABLE_NAME: /^[A-Za-z0-9 !@#$%^&*()\-_=+'"<,>.?]+$/,
  TABLE_CODE: /^[A-Z_]+$/,
  TABLE_DESCRIPTION: /^[A-Za-z0-9 !@#$%^&*()\-_=+'"<,>.?]+$/,
  TAG_WEIGHT: /^[1-9]+[0-9]*$/,
  ENTRY_DETAIL: /^[^\\]+$/,
  ENTRY_LIMIT: /^[1-9]+[0-9]*$/,
}