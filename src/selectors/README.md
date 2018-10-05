# Selector Schema

Selectors are used by our Redux-connected containers to query data from the Redux store in a format that is preferable for components to work with that data.

In general, the goal of our selectors is to get "full" objects. In other words, if an object contains a reference-by-id to another objects, pull in the full details of that referenced object.

The exception is cases where we know for certain that certain data is not required by any components. For example, we know that the Hexes screen and its subcomponents have no need to know about the `terrainHexes`, `territoryHexes`, or any other fields contained in a `tag` object. The `id` of the tag is all that is needed, so our hexes selector doesn't need to drill down into tags.

Finally, the selector schema here is also the preferred schema to dispatch an edited or deleted object to an action. I.e. do not submit only the object ID when requesting to delete an object from the Redux store. Submit the "full" object. Action reducers often need the full, drilled-down data object when updating/deleting.

## hexes

We don't need to know about tag weights or limits for hexes, so don't drill down into those.
If `entryDetailsGroup` is `HEX`, this hex is using the global hex definitions. No need to drill down into the entryDetailsGroup in that case -- `entryDetails` can be `undefined` or `[]`

```
fullHex = {
  id: "0101",
  weight: 1,
  text: "0101",
  entryDetailsGroup: "92bdc6ab-e326-42e6-bd6b-7a41d99afece",
  entryDetails: [ //drill down by entryDetailsGroup ID!
  	{
  		id: "f5864d1a-fa9a-4479-a6ec-a23a66096020",
  		text: "An ancient castle on the edge of a cliff"
  	},
  	...
  ]
  addTags: ["forest"], //only care about the ID, so no need to drill down
  tagWeights: [],
  tagBlacklist: [],
  limit: null, //null if no limit
}
```

## tags

The tags screen doesn't need any details about hexes that reference each tag, so we don't have to follow any of the referenced IDs in `terrainHexes` or `territoryHexes`

```
fullTag = {
  id: "animal",
  text: "animal",
  terrainHexes: ["0101", ...], //not used anywhere on the Tags screen, so no need to drill down
  territoryHexes: [...]
}
```

There is a pretty big use case on the Tags screen for knowing whether a tag is a "terrain", "territory", or "other" tag based on `terrainHex` and `territoryHexes`, so we will have separate selectors for each of those categories. The basic object they return is the same.

There is also a use case for determining the label color of tag based on its category, so we will have a selector for that here as well.

## tables

This is the big one. We need to follow most of the reference-by-id[s] here because we need information about: table entries, entry details, tags, tag weights.

```
fullTable = {
  id: "1e7bea41-1885-4db7-84f1-1b0eee4c6adb",
  code: "NPC",
  name: "Random NPC",
  description: "A random, intelligent NPC"
  template: { //drill down by ID!
    id: "c601934b-0c71-487d-8274-9ff63cd86f24",
    name: "Important NPC", // we really only need the template "name" on the tables screen, but its just as easy to pull all of the information as we drill into the reference
    description: "Template for printing a full list of all the important NPCs in the campaigh",
    table: "1e7bea41-1885-4db7-84f1-1b0eee4c6adb",
    internalId: "7b50f4e2-4aee-4b01-b6ea-e6bff16ab61f",
    metadata: {...}
  },
  entries: [
    {
      id: "a92129a8-e3f4-4583-bcfa-dff3f957c123",
      weight: 5,
      text: "[[FIRST_NAME]] [[LAST_NAME]]",
      entryDetailsGroup: "92bdc6ab-e326-42e6-bd6b-7a41d99afece",
      entryDetails: [ //drill down by entryDetailsGroup ID!
        {
          id: "f5864d1a-fa9a-4479-a6ec-a23a66096020",
          text: "Carrying [[SEARCH_THE_BODY]]"
        },
        ...
      ]
      addTags: [], //not currently used for non-HEX tables, so can ignore
      tagWeights: [ //drill down by ID!
        {
          id: "56ece470-49cf-413a-98d6-4f16aad63552",
          tag: "mountain",
          weight: 13
        },
        ...
      ],
      tagBlacklist: ["unintelligent", ...], //only need the tag ID, so no need to drill down here
      limit: 10,
    },
    ...
  ]
}
```

## templates

TBD

## books

TBD
