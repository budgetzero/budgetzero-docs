---
sidebar_position: 0
---

# Development

## Setup
To run locally for development, run the following in the root folder.

```
npm install
npm run serve
```

This starts a local development webserver running on localhost.

## Unit Tests

Run all tests once:
```
npm run test:unit
```

Run all tests and re-run if files change:  
```
npm run test-watch:unit
```

Run with debugger (chrome://inspect)
```
node --inspect node_modules/.bin/jest --runInBand tests/unit/Transactions.spec.js    
```

## End-to-end Tests

```
npx cypress run
```