---
sidebar_position: 1
---

# Deployment

You can either deploy the docker image or build and host the static files on your own web server. 

:::note

This section only deals with deploying the client-side budgetzero web app. For instructions on setting up the __completely optional__ Sync Server [see the guide](sync-server). 

:::



## Docker

Pull docker image:
```
docker pull budgetzero/budgetzero:latest
```

Run:
```
docker run -d -p <desired_port>:8080 --name budgetzero budgetzero/budgetzero
```
Example:
```
docker run -d -p 8080:8080 --name budgetzero budgetzero/budgetzero
```
Your budgetzero instance is now running at <docker_IP>:<desired_port>


## Manual build and deploy

Build your site **for production**:

```bash
npm run build
```

The static files are generated in the `build` folder, which can be hosted on just about anywhere. 




