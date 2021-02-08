<h1 style="color: #ff7f00">Work in progress</h1>

# Overview

A simple boilerplate for creating full stack web applications.

## Setup

```
git clone https://github.com/mmilanovic4/react-ssr.git
cd react-ssr
npm install
```

## Production

```
npm run clean
npm run build:client:prod
npm run build:server:prod
npm run start:prod
```

## Development

```
npm run clean
npm run build:client:dev
npm run build:server:dev
npm run start:dev
```

Differences between PROD and DEV:

- `webpack.mode` is set to `production` if started in PROD or to `development` if started in DEV
- `webpack.watch` is set to `true` if started in DEV

## Profiling

To profile your JavaScript application simply run:

```
npm run build:client:stats
npm run build:server:stats
```

Now `stats.json` file is generated in your project's root directory and you can open it with [webpack analyse](https://github.com/webpack/analyse) or some [other build analysis tool](https://survivejs.com/webpack/optimizing/build-analysis/).
