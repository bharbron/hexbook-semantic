import {VALID_TABLE_CODE_REGEX} from '../constants/regex'

export function nameAdjuster(value) {
  return value
}

export function nameValidation(value) {
  return false
}

export function codeAdjuster(value) {
  return value.toUpperCase()
}

export function codeValidation(value) {
  if (!value.match(VALID_TABLE_CODE_REGEX)) {
    return 'Code may only contain uppercase letters and underscores'
  }
}

export function descriptionAdjuster(value) {
  return value
}

export function descriptionValidation(value) {
  return false
}