export const REGEX = {
  EMPTY: /^$/,
  INTEGER: /^0$|^[1-9]+[0-9]*$/,
  HEX_MAP: /^[a-zA-Z0-9]+$|^[a-zA-Z0-9]+,[a-z]*$|^[a-zA-Z0-9]+,[a-z]*,[a-z]*$/,
  HEX_MAP_COORDINATES: /^[A-Za-z0-9]+$/,
  HEX_MAP_TERRAIN: /^[a-z]*$/,
  HEX_MAP_TERRITORY: /^[a-z]*$/,
  TABLE_DEFINITION: /^[A-Za-z0-9 !@#$%^&*()\-_=+'"<,>.?]+$/,
  TABLE_ENTRY: /^0,.+$|^[1-9]+[0-9]*,.+$/,
  TABLE_NAME: /^[A-Za-z0-9 !@#$%^&*()\-_=+'"<,>.?]+$/,
  TABLE_CODE: /^[A-Z_]+$/,
  TABLE_DESCRIPTION: /^[A-Za-z0-9 !@#$%^&*()\-_=+'"<,>.?]+$/,
}