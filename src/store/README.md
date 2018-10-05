# Store Schema

Always follow best practices for flat, normalized data. Including the use of separate `byId` and `allIds` lookups:

https://redux.js.org/recipes/structuringreducers/normalizingstateshape

We use uuid4 for most IDs, with the following exceptions:

`HEX` is used as the ID for the table of hexes
The hex coordinate, e.g. `1284`, is used as the ID for individual hexes in tableEntries
`HEX` is used as the ID for the global hex definitions stored in entryDetailsGroup
The tag name is used as the ID in the `Tags` table (we want all tags with the same name to be the same object)

## Deleting objects

The question of how and when actually completely delete objects from the Redux store is important. Follow these rules:

* We never fully delete an object.
* At most, we set `byId.id = undefined` and remove the id from `allIds`

Then there's the difficult cases. For example, what do we do with a `tagWeight` if the `tag` it references has been deleted? Do we nullify the entire `tagWeight` entry per the rules above? Do we not do anything at all and have the selector check if `tag` is a valid, existing tag when we try to select `tagWeights`? And what do we do about the array of tagWeights stored in a tableEntry if we *do* nullify the `tagWeight`?

Try to follow this guideline:

* If you cannot know whether or not to remove an object from `allIds` **without** knowing information contained within `byId`, **do not** nullify the entire object. Only nullify the relevant field in the object in `byId` and rely on the selector to filter things out.

Back to the `tagWeight` example. If the `animal` tag has been deleted, we can clean up `tagWeights.byId` by iterating through all IDs, finding the objects that have `tag = "animal"` and deleting them. But how would we clean up `tagWeights.allIds`? We can only remove an id from there if we know what its `tag` value is in `tagWeights.byId`. So this would fall under the guideline above.

Following that guideline, instead of setting `tagWeights.byId[id of object where tag is animal] = undefined` we would instead do `tagWeights.byId[id of object where tag is animal].tag = undefined`. We do *nothing* with `tagWeights.allIds` -- just leave the ID in there. We then rely on the tagWeight selector to filter out any tagWeight where `tag === undefined`

The alternative to this guideline is to joing `byId` and `allIds` under a single reducer, which quickly turns ugly.

```
entities: {
  tables: {
    byId: {
      "HEX": {
        id: "HEX",
        code: "HEX",
        name: "Hex Map",
        description: "Mapping of hex coordinates to terrain and territory",
        template: "HEX",
        entries: ["0101", ...],
      },
      "1e7bea41-1885-4db7-84f1-1b0eee4c6adb": {
        id: "1e7bea41-1885-4db7-84f1-1b0eee4c6adb",
        code: "NPC",
        name: "Random NPC",
        description: "A random, intelligent NPC"
        template: undefined, // undefined if this table has no template attached to it
        entries: ["a92129a8-e3f4-4583-bcfa-dff3f957c123", ...]
      },
      ...
    },
    allIds: ["HEX", "1e7bea41-1885-4db7-84f1-1b0eee4c6adb", ...]
  },
  tableEntries: {
    byId: {
      "0101": {
        id: "0101",
        weight: 1,
        text: "0101",
        entryDetailsGroup: "HEX", //"HEX" if this hex uses the global hex definition. uuid of a unique entryDetailGroup if this hex overrides the global definition
        addTags: ["forest"], //addTags[0] is the terrain tag, addTags[1] is terrain. Currently only used by hexes
        tagWeights: [],
        tagBlacklist: [],
        limit: null, //null if no limit
      },
      "a92129a8-e3f4-4583-bcfa-dff3f957c123": {
        id: "a92129a8-e3f4-4583-bcfa-dff3f957c123",
        weight: 5,
        text: "[[FIRST_NAME]] [[LAST_NAME]]",
        entryDetailsGroup: "92bdc6ab-e326-42e6-bd6b-7a41d99afece",
        addTags: [],
        tagWeights: ["56ece470-49cf-413a-98d6-4f16aad63552", ...],
        tagBlacklist: ["unintelligent", ...],
        limit: 10,
      },
      ...
    },
    allIds: ["0101", "a92129a8-e3f4-4583-bcfa-dff3f957c123", ...]
  },
  entryDetailsGroups: {
    byId: {
      "HEX": { // the global hex definition group
        id: "HEX",
        entryDetails: ["ef0f65c2-0c2e-4bc8-8509-a00b81457b56", ...]
      },
      "92bdc6ab-e326-42e6-bd6b-7a41d99afece": {
        id: "92bdc6ab-e326-42e6-bd6b-7a41d99afece",
        entryDetails: ["f5864d1a-fa9a-4479-a6ec-a23a66096020", ...]
      },
      ...
    },
    allIds: ["HEX", "92bdc6ab-e326-42e6-bd6b-7a41d99afece"]
  },
  entryDetails: {
    byId: {
      "ef0f65c2-0c2e-4bc8-8509-a00b81457b56": {
        id: "ef0f65c2-0c2e-4bc8-8509-a00b81457b56",
        text: "[[LANDMARK]]"
      },
      "f5864d1a-fa9a-4479-a6ec-a23a66096020": {
        id: "f5864d1a-fa9a-4479-a6ec-a23a66096020",
        text: "Carrying [[SEARCH_THE_BODY]]"
      },
      ...
    },
    allIds: ["ef0f65c2-0c2e-4bc8-8509-a00b81457b56", "f5864d1a-fa9a-4479-a6ec-a23a66096020", ...]
  },
  tagWeights: {
    byId: {
      "56ece470-49cf-413a-98d6-4f16aad63552": {
        id: "56ece470-49cf-413a-98d6-4f16aad63552",
        tag: "mountain",
        weight: 13
      },
      ...
    },
    allIds: ["56ece470-49cf-413a-98d6-4f16aad63552", ...]
  },
  tags: {
    byId: {
      "forest": {
        id: "forest",
        text: "forest",
        terrainHexes: ["0101", ...], //list of any hexes that have this tag as addTags[0], i.e. terrain
        territoryHexes: [...], //list of any hexes that have this tag as addTags[1], i.e. territory
      },
      "mountain": {
        id: "mountain",
        text: "mountain",
        terrainHexes: [...],
        territoryHexes: [...],
      },
      "unintelligent": {
        id: "unintelligent",
        text: "unintelligent",
        terrainHexes: [...],
        territoryHexes: [...],
      },
      ...
    },
    allIds: ["forest", "mountain", "unintelligent", ...]
  },
  templates: {
    byId: {
      "HEX": {
        id: "HEX",
        name: "Hexes",
        description: "Template for printing the list of hexes",
        table: "HEX",
        internalId: "7b50f4e2-4aee-4b01-b6ea-e6bff16ab61f", // internal UUID that is a hardcoded reference to the actual, built-in code for handling this particular template
        metadata: {...} // The code for each built-in template will require unique settings. E.g. number of columns, amount of whitespace, etc. Store those here.
      },
      "c601934b-0c71-487d-8274-9ff63cd86f24": {
        id: "c601934b-0c71-487d-8274-9ff63cd86f24",
        name: "Treasures",
        description: "Template for printing a full list of all the important treasures in the campaigh",
        table: "<uuid of the TREASURE table>",
        internalId: "7b50f4e2-4aee-4b01-b6ea-e6bff16ab61f",
        metadata: {...}
      },
      ...
    },
    "allIds": ["HEX", "c601934b-0c71-487d-8274-9ff63cd86f24", ...]
  },
  books: {
    byId: {TBD},
    allIds: [TBD]
  }
}
```
