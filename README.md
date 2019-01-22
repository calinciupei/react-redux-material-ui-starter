# React Redux Simple Starter

[![Build Status](https://travis-ci.org/calinciupei/react-redux-simple-starter.svg?branch=master)](https://travis-ci.org/calinciupei/react-redux-simple-starter)
[![dependencies](https://david-dm.org/calinciupei/react-redux-simple-starter.svg)](https://david-dm.org/calinciupei/react-redux-simple-starter)
[![devDependency Status](https://david-dm.org/calinciupei/react-redux-simple-starter/dev-status.svg)](https://david-dm.org/calinciupei/react-redux-simple-starter#info=devDependencies)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com/)

Starter kit designed to get up and running with a bunch of awesome front-end technologies.

## Table of Contents
1. [Requirements](#requirements)
1. [Installation & Running the Project](#getting-started)
1. [Project Structure](#project-structure)
1. [Live Development](#local-development)
    * [Hot Reloading](#hot-reloading)

## Requirements
* node `^11.5.0`
* yarn `^1.12.3` or npm `^6.5.0`

## Installation

After environment meets the above [requirements](#requirements), you can create a new project based on `react-redux-simple-starter` by doing the following:

```bash
$ git clone https://github.com/calinciupei/react-redux-simple-starter.git <my-project-name>
$ cd <my-project-name>
```

Install the project dependencies. It is recommended that you use [Yarn](https://yarnpkg.com/) for deterministic dependency management, but `npm install` will suffice.

```bash
$ yarn
```
-OR-

```bash
$ npm install
```
After completing the [installation](#installation) step, you're ready to start the project!

```bash
$ yarn start  # Start the development server (or `npm start`)
```

While developing, you will probably rely mostly on `yarn start`; however, there are additional scripts at your disposal:

|`yarn <script>`    |Description|
|-------------------|-----------|
|`start:dev`            |Serves your app at `localhost:3000`|

## Project Structure

```
.
├── dist                     # All build-related code
├── src                      # Application source code
│   ├── components           # Global Reusable Components
│   ├── containers           # Global Reusable Container Components
│   ├── pages                # Pages that are used as fractal route and holds redux specific pieces
│   ├── reducers             # Reducers registry and injection
│   ├── styles               # Application-wide styles (settings)
│   ├── templates            # Embedded JS templates from which will generate index.html based on environment
│   └── index.js             # Application bootstrap and rendering
```

## Live Development

### Hot Reloading

Hot reloading is enabled by default when the application is running in development mode (`yarn start:dev`).
