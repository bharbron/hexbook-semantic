const arrayWithPush = (array, item) => [
  ...array, item
]

const arrayWithUniquePush = (array, item) => [
  ...array.filter(x => x !== item), item
]

const arrayWithInsertAtIndex = (array, item, index) => [
  ...array.slice(0, index),
  item,
  ...array.slice(index)
]

const arrayWithItemRemoved = (array, item) => [
  ...array.filter(x => x !== item)
]

export {arrayWithPush, arrayWithUniquePush, arrayWithInsertAtIndex, arrayWithItemRemoved}