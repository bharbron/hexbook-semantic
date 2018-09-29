export const REGEX = {
  EMPTY: /^$/,
  VALID_INTEGER: /^0$|^[1-9]+[0-9]*$/,
  VALID_HEX_MAP: /^[a-zA-Z0-9]+$|^[a-zA-Z0-9]+,[a-z]*$|^[a-zA-Z0-9]+,[a-z]*,[a-z]*$/,
  VALID_HEX_MAP_COORDINATES: /^[A-Za-z0-9]+$/,
  VALID_HEX_MAP_TERRAIN: /^[a-z]*$/,
  VALID_HEX_MAP_TERRITORY: /^[a-z]*$/,
  VALID_TABLE_DEFINITION: /^[A-Za-z0-9 !@#\$%\^&*\(\)\-_=\+'"<,>\.?]+$/,
  VALID_TABLE_ENTRY: /^0,.+$|^[1-9]+[0-9]*,.+$/,
  VALID_TABLE_NAME: /^[A-Za-z0-9 !@#\$%\^&*\(\)\-_=\+'"<,>\.?]+$/,
  VALID_TABLE_CODE: /^[A-Z_]+$/,
  VALID_TABLE_DESCRIPTION: /^[A-Za-z0-9 !@#\$%\^&*\(\)\-_=\+'"<,>\.?]+$/,
}