/*
 * action types
 */
​
export const CHANGE_PAGE = 'CHANGE_PAGE'
​
/*
 * action creators
 */
​
export function changePage(url) {
  return { type: CHANGE_PAGE, url }
}