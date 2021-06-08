---
sidebar_position: 0
---
# Getting Started
There's multiple ways to use budgetzero.
1. On the official [app.budgetzero.io](https://app.budgetzero.io) page.
2. Installing the desktop app (Windows or Mac). [Download here](https://github.com/budgetzero/budgetzero/releases/latest)
3. Self host the web app. You can either deploy the docker image or build and host the static files on your own webserver. See deployment section below for more details. 

## Generate a new site

Generate a new Docusaurus site using the **classic template**:

```shell
npx @docusaurus/init@latest init my-website classic
```

## Start your site

Run the development server:

```shell
cd my-website

npx docusaurus start
```

Your site starts at `http://localhost:3000`.

Open `docs/intro.md` and edit some lines: the site **reloads automatically** and display your changes.
