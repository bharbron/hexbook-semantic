# HexPop!

Being a Javascript/React/Redux/Semantic UI/Electron application for the procedural generation of TTRPG hexcrawl notebooks

## Say whah?

A "hexcrawl" is a style of TTRPG play where the players travel overland on a map divided into hexes, discovering landmarks, encountering enemies, recovering treasures. The expectation is that the referee (or "Dungeon Master" or "Game Master") has information on what is located in each map hex. However, this becomes more difficult the larger the map gets. In my own game, we use a 40x30 map. That's 1200 hexes that need information on landmarks, encounters, treasures, adventure hooks, etc. It is difficult and time consuming for an individual referee to come up with 1200 unique and interesting ideas to fill a map with.

Some referees instead use published hexcrawl products -- maps with included index listing the basic contents of each hex (or at least a great number of the hexes). Examples include: _Wilderlands of High Fantasy_, _Carcosa_, _The Dark of Hot Springs Island_, _Fever Swamp_. These can be excellent resources. Locations are already defined. Referencing information mid-game can be done quickly. The main downside is that -- unless you do a lot of modification -- you are not playing in your own custom world. There are also many wonderful published setting books that aren't written with hexcrawls in mind.

Some referees rely on random tables to procedurally generate content for their hexes. For example, if a referee needs to know what is found in hex `1232`, they might roll on a table of random landmarks, a table of random encounters, a table of random adventure hooks, a table of random NPC motivations. Whatever detail and however much details they think they need. This is often done in the middle of a game, especially if players travel to a hex the referee had not prepared for.

Random tables have many benefits. They aren't too difficult to write. They are easily customized to the referee's world. The random results -- especially combinations of results from multiple tables -- can inspire ideas that the referee might not have otherwise had. There are a *lot* of published products that include a *lot* of useful random tables. Almost certainly more than there are published hexcrawl products.

But the big downside is that it takes time to roll on all of these mid-game. If the players are marching south and you need to know if there's any tall landmarks they see in adjacent hexes, now you have to roll on several tables for several hexes all at once. Repeat that each time the players move to a new hex. The referee also needs to keep notes about everything that was rolled and found. More time consumed at the table, and it is easy for these notes to become disorganized.

## Enter HexPop!

HexPop! is an attempt to get the best of both worlds. It is an application where you input two main things: a list of hex coordinates and associated terrains from your campaign map, and your own curated collection of random tabels for generating content for those hexes. It outputs one main thing: a PDF with an index of contents for each of your hexes, generated from the collection of tables you inputted. The PDF will be nicely formatted, ready to be uploaded to a Print-on-Demand service (Lulu, etc.), and ready to be shipped to you as a notebook for your campaign.

An example of the result: https://blog.thesconesalone.com/2018/08/my-campaign-notebook-has-arrived.html

In short, HexPop! is a way of using easy-to-write random tables to create your own, easy-to-reference hexcrawl product.

# Interface Overview

The HexPop! interface is designed around these main actions: writing random tables, inputting a listing of hex-to-terrain mappings, deciding what will be printed in the final notebook.

## Table Entry Syntax

When entering table results, hex definitions, etc. the following syntax is used:

`There is a [[LANDMARK]] on the horizon` = Roll a random result on the table with code `LANDMARK` and insert the text

`A [[MONSTER:+night,-friendly]] waits in ambush` = Add the `night` tag to the filter, remove the `friendly` tag from the filter, roll a random result on the `MONSTER` table, insert the text

`He is carrying [[TREASURE:-ALL,+magic]]` = Remove all tags from the filter, add the `magic` tag to the filter, roll on the `TREASURE`, insert result

In this way, we can have tables referencing other tables, referencing other tables, etc. and get a variety of results from a few tables.

## Hexes Screen

### Hex Defintion

Defines what contents should be generated for each hex. Example:

* `[[LANDMARK]]`
* `[[RANDOM_ENCOUNTER]]. NPC wants [[NPC_GOAL]]`
* `Contains [[TREASURE]]`

These will be used for every hex that doesn't have an override.

### Hex Map

Input of all of the coordinate-to-terrain mappings for the campaign world. Coordinate and terrain are required. Territory is optional.

Note that there isn't anything special about terrain vs territory. They are simply tags that are applied to the filter chain when generating contents for each hex.

You can click on any hex to edit it. In the edit screen, you can choose to override the global Hex Definition with contents specific to this hex. You would use this in cases where you have already decided what will be located in a hex and don't need to randomly generate it.

Finally, the hex map itself is a random table, which can be referenced using the code `HEX`.

## Tags Screen

Tags are our way of filtering available results on random tables. Whenever a roll is made on a table, the roll takes into account all of the tags on the "filter chain". Tags can change the weighting of an entry in the table (a "tag weight" is assigned to the entry) or make an entry inelligble as a result (a tag is "blacklisted" for the entry). The filter chain starts with whatever terrain and territory tags are assigned to the hex that is currently being processed. This is how we, for example, make sure that a "forest" hex is only getting results that are applicable to a "forest".

New tags are automatically created for the terrain and territory when a hex is added or edited. The user can also manually add "other" tags.

These classifications are fluid. A "terrain" tag is simply a tag that is assigned as the terrain to at least one hex. If it is removed from all hexes, it becomes an "other" tag. Likewise for a "territory" tag. An "other" tag is simply one that isn't assigned to a hex. On the backend, there isn't any difference between the three. They all affect result filtering in the same way.

## Tables Screen

Here's where most the action happens. The user will add all of the various random tables they want to use to generate content for their hexes. Random lanmark tables, encounter tables, motifivation tables, adventure hook tables, treasure tables, name tables, personality tables. Whatever the user thinks they'll want.

Every table has the following: a name, a reference code, a description, and a listing of table entries. The code is especially important -- it is what is used for referencing the table as `[[CODE]]` and must be unique.

Every table entry has the following:

* Weight
* Tag Weights

Weight is the relative probability of this result being rolled compared to other results in the table. Example: Entry A has a total weight of 3, Entry B has a weight of 2, Entry C has a weight of 1. A roll of 1-3 will result in Entry A, 4-5 for Entry B, 6 for entry C. The total weight is always equal to: the generic weight defined in the `Weight` field plus the `Tag Weights` of any tags that are currently in the filter chain.

* Result
* Template Details

`Result` is the text returned to any `[[CODE]]` references to this table. `Template Details` are further details about the entry provided to any Templates that are attached to this table. Example:

We have a `RANDOM_NPC` table. The `Result` for the table is the NPC's name, which gets inserted in any `[[RANDOM_NPC]]` references. The `Template Details` defines further details about the NPC: their appearance, their personality, their goals, what weapons they have, their hometown, etc. Those do **not** get inserted in `[[RANDOM_NPC]]` references. Instead, let's say there is an `NPC Index` template attached to this table. That template defines that an index of the entries in this table will be printed in the notebook. That index **does** include the information from the `Template Details`.

* Blacklist

This entry will be excluded from possibly results if any of its blacklisted tags are in the filter chain. This is how we, for example, prevent an ocean creature from showing up in a desert hex.

* Limit

The maximum number of times this entry is allowed to be the result of a roll. For example, if you wanted a particular random treasure to be unique in your campaign, you could set its `Limit` as `1`. Note that if *all* entries in a table have reached their limit, we allow the limits to be exceeded so that we can still have a result.

## Templates Screen

Here we define any templates that will be attached to tables (including the hex map table). A template is basically our way of saying: "The full contents of this table may be displayed in the final book and should be displayed in this format." Templates are how we make the listings and indexes of hexes, NPCs, treasures, villages, etc. to be printed in the book.

The user will be able to choose from a selection of built-in templates. Templates may have their own settings unique to that template. For example, an "Index" template would have the user choose how many `Template Details` should be displayed for each result in the attached table and what formatting should be used for each. e.g. The first `Template Detail` will be displayed as an `<h1>`, the second as a `<p>`, the third as an italicized `<span>` continuing on the same line as the previous.

At the miniumum, all Templates have a setting defining which Table they are attached to.

If a Table has a Template attached to it, all of its entries become "static". This means their results and details are only rolled once. Example: The `[[NPC]]` table has an `Index of Important NPCs` template attached to it. If an entry in the `[[NPC]]` table has a result like `His name is [[FIRSTNAME]] [[LASTNAME]]`, the first name and last name would be rolled for only once. Regardless of how many times this result comes up on rolls on the `[[NPC]]` table, the first name and last name remain the same.

## Books Screen

Where we finalize our book[s]. We will create one or more books, define which Templates will be printed in which book in what order. Upon clicking the "Finalize" button, details for all tables (including `HEX`) that have attached templates will be rolled for. When all rolling and recursive rolling and recursive rolling is done, out pops the finalized PDF with all of the included Templates.

# Development

## Setting up development environment

You will need to have `yarn` installed. Then `cd` into the top-level directory and run the following command:

`yarn`

This will install all dependencies for the development environment

## Running development instance

Once again, `cd` to the top-level directory and run the following:

`yarn electron-dev`

After a few seconds and Electron (chromium) window will open with HexPop! loaded. You should have access to developer tools (including React tools) via the application menu.

## Development concerns

### Redux vs. Local Store

All application "data" -- hex listing, tags, tables, table entries, etc. -- should be persisted to the Redux store. Each "screen" will be a Redux-connected container that writes data to Redux via actions and reads from Redux via selectors.

UI information -- current values in input boxes, state of toggles, whether modals are open or not, etc. -- should be stored only in local component state.

### Containers vs. Components

In general, the only Redux-connected, smart "containers" we have should be the top level containers for each of the main screens. The hex, tag, table, template, book screens should be Redux-connected containers that write data to the Redux store only via action reducers and read from the Redux store only via selectors. The containers should render very little by themselves. Instead, most of the UI parts on each screen should be defined in non-Redux-connected, dumb "components" that the screen containers pass necessary application data to.

### Class vs. Functional Components

Strive to make components as small as possible. In general, a component should either: a) Render a single thing, or b) Render nothing directly, but call several other components to each render their one thing. If a component does not have its own local state, it should *always* be turned into a functional component. And we should, in general, raise state far enough up to create as many controlled, functional components as is convenient.

### Controlled vs. Uncontrolled Components

"Values" on inputs should always be controlled. i.e. An input field should never be tracking its own value in its own local `this.state.value`. The value should be controlled in a parent component and provided to the input component via `props.value`. This is to make it easier to do input validation across an entire form. In this case, state should be raised only as high as is necessary to have a single component that is aware of all inputs on the screen and can validate them all. We are *not* required to elevate all the way to the screen "container". In fact, the screen container, in general, should only control `onSubmit` actions and the read/writes to Redux store. We can leave the rest to non-Redux-connected components.

### Constants

In general, any setting/value that will be used in multiple places across the application: e.g. regex for a valid tag name, the color we're using for primary submission buttons, error messages for invalid inputs, etc. should be stored in an object of "constants". Anyplace where that value is used should reference it via the constant.

## Schema

The data model/schema will change slightly between data in the Redux store, data returned by selectors, and data being used in final processing. Each of these has different concerns and different ways that it is better to work with the data. Selectors and reducers will be our primary way of translating between the differenet schemas, which is why it is mandatory that the containers only interact with the Redux store via those.

### Redux store schema

[Link](./src/store/README.md)

### Selector schema

[Link](./src/selectors/README.md)

### Final processing schema

TBD
