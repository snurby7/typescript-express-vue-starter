# typescript-express-vue-starter

[![Build Status](https://travis-ci.org/snurby7/typescript-express-vue-starter.svg?branch=master)](https://travis-ci.org/snurby7/typescript-express-vue-starter)

### Vue Fullstack App Monorepo Boilerplate

- Lerna and Yarn Workspaces to manage monorepo
- Full Stack: Front End, Server, Common module packages
- Front End package: Vue SPA using Vue-cli 3
- Server package: Node+Express
- Common package: common code used in both Front End and Server
- Docs using Vuepress and Github pages

## Prerequisites

This boilerplate uses [Lerna](https://lernajs.io/) and [Yarn](https://yarnpkg.com/lang/en/) workspaces to manage packages in monorepo.
[vue-cli](https://cli.vuejs.org/) is used in UI package. Suggest to install [Lerna](https://lernajs.io/), [Yarn](https://yarnpkg.com/en/docs/install) and [vue-cli](https://cli.vuejs.org/) globally in dev environment

## Quick start

```bash
# 1. Clone the repository.
git clone https://github.com/snurby7/typescript-express-vue-starter.git my-new-project

# 2. Enter your newly-cloned folder
cd my-new-project

# 3. Bootstrap
yarn run bootstrap

# 4. Run Build in all packages
yarn run build

# 5. Dev: Run Server and in parallel start UI Serve with hot reload
yarn run dev

```

## Top-Level Scripts

```json
  "scripts": {
    "bootstrap": "lerna bootstrap",
    "dev": "concurrently --kill-others --success first \"npm start --prefix ./packages/server\" \"npm run serve --prefix ./packages/ui\"",
    "test": "npm run test:common && npm run test:server && npm run test:ui",
    "test:common": "npm test --prefix ./packages/common",
    "test:server": "npm test --prefix ./packages/server",
    "test:ui": "npm test --prefix ./packages/ui",
    "build": "lerna run build",
    "docs:dev": "vuepress dev docs",
    "docs:build": "vuepress build docs",
    "docs:deploy": "yarn run docs:build && ./scripts/docsdeploy.sh",
    "publish": "lerna publish"
  }

```

- `bootstrap` - install all packages and setup links for internal packages using lerna
- `dev` - run Server and in parallel start UI Serve with hot reload
- `test` - execute tests in all packages
- `test:common` - execute tests in common package
- `test:server` - execute tests in server package
- `test:ui` - execute tests in UI package
- `build` - execute build script in all packages
- `docs:dev` - vuepress documentation development
- `docs:build` - build vuepress docs
- `docs:deploy` - deploy vuepress docs to github pages
- `publish` - publish public packages using lerna

## Dev

Top-level script `yarn run dev` starts Server package that contains back end API implementation.
And in parallel starts `vue-cli-service serve` script in UI package.
This allows UI development with hot reloading, with dev server proxying API requests to API implementation

`vue.config.js` in UI package is configured to proxy API requests:

```js
// vue.config.js
module.exports = {
  devServer: {
    proxy: "http://localhost:3000",
  },
};
```

## License

MIT
