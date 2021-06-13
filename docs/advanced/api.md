---
sidebar_position: 5
---

# API Access

There's no direct API to interact with the client-side PouchDB database. However, this type of action can be accomplished by setting up a [self-hosted CouchDB sync server](sync-server) and then interacting with the [CouchDB API](https://docs.couchdb.org/en/stable/api/index.html) over HTTP.

:::caution
If you interact directly with the database documents, ensure that any changes stay consistent with the [data format docs](architecture#data-format). Invalid data formats may cause unexpected results or crashes. 
:::

## Examples

Coming soon.