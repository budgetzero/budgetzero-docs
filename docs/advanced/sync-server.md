---
sidebar_position: 1
---

# Self-hosted Sync Server


Budgetzero uses [PouchDB](https://pouchdb.com/) to store **all** data client-side in the browser. In order to enable sync across multiple browsers and/or devices, you'll need to set up a [CouchDB](https://couchdb.apache.org/) server accessible from any budgetzero instances. This setup guide is a general overview, feel free to adapt as needed.

## Instructions
Manual Setup Instructions for Advanced Users

1. Install CouchDB on a server: [Manually](https://docs.couchdb.org/en/stable/install/index.html) or with the [official docker couchdb](https://github.com/apache/couchdb-docker) image.  
  If you're using docker, start CouchDB using the provided instructions.  
  Example:  
    ```
    docker run -d --name budgetzero-couchdb-sync -e COUCHDB_USER=admin -e COUCHDB_PASSWORD=password couchdb:latest
    ```
    Replace <code>admin</code> and <code>password</code> with desired user/password.  

2. Navigate to http://[docker_host_IP]:5984/_utils, which opens the Fauxton web interface for CouchDB administration. 

4. Go to 'Configuration' and enable CORS for all domains.  
5. Create a database with whatever name you desire.
6. In BudgetZero, go to Settings and set the couchdb URL to start syncing. This will need to be set up for each client/browser/computer/etc.  
   Examples:  
   ```http://localhost:5984/mybudget```  
   ```http://username:password@192.168.1.10:5984/mybudget``` 
      
  <!-- ![](public/sync.png) -->
  
