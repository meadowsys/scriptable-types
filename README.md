# scriptable-types

Type definitions for [Scriptable](https://scriptable.app), all heavily based off of their [official documentation](https://docs.scriptable.app).

We may use some of these types in our own projects. When we do confirm the typings for an item are correct, and we remember to update these typings, we will add a note to the item stating we have confirmed ourselves that the API works.

## Usage (in a npm project)

Install the package using npm, or some other package manager of your choice:

```sh
npm install scriptable-typings
pnpm install scriptable-typings
```

Alternatively, you can install directly from the github repository, which may be desireable as this project is currently being active developed:

```sh
npm install meadowsys/scriptable-types
pnpm install meadowsys/scriptable-types
```

After installing the package with npm (or pnpm, etc.), add this to the top of your script file:

```ts
/// <reference types="scriptable-typings" />
```

This counts as a comment to a javascript parser, so it is not necessary to remove it when the script gets copied into Scriptable.

## Usage via other methods

We may add documentation for other methods of consuming this package here later...
