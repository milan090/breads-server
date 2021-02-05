# Breads API

An Express REST API service, Python web scraper, and MySQL database for [breads.io](https://www.breads.io/). See [breads-client](https://github.com/aTmb405/breads-client) for front end code and more details about the project.

## Table of Contents
* [Installing](https://github.com/aTmb405/breads-server/blob/master/README.md#Installing)
* [Running](https://github.com/aTmb405/breads-server/blob/master/README.md#Running)
* [Testing](https://github.com/aTmb405/breads-server/blob/master/README.md#Testing)
* [Deploying](https://github.com/aTmb405/breads-server/blob/master/README.md#Deploying)
* [Technologies](https://github.com/aTmb405/breads-server/blob/master/README.md#Technologies)

## Installing

After you have forked the project and downloaded the code, install the necessary dependencies using [npm](https://docs.npmjs.com/about-npm/) or [yarn](https://yarnpkg.com/getting-started).

To install the packages through npm, run the command `npm install`

To install the packages through yarn, run the command `yarn add`

NOTE: In the rest of the documentation, you will come across npm being used for running commands. To use yarn in place of npm for the commands, simply substitute npm for yarn. Example, npm start as yarn start. For more help, checkout [migrating from npm](https://classic.yarnpkg.com/en/docs/migrating-from-npm/).

## Running

Make sure the necessary dependencies are installed and type the command `npm start`

## Testing

At this moment, there are no tests.

## Deploying

After confirming the tests have passed, create a pull request on the development branch 

`git push origin development`

(Eventually) CircleCI will run a test suite and deploy the changes to a Heroku site for staging. If everything passed, your changes will be merged into main.

## Technologies

* [Node.js](https://nodejs.org/en/)
* [Express](http://expressjs.com/)
* [Python](https://www.python.org/)
* [MySQL](https://www.mysql.com/)

### Near Future

* [CircleCI](https://circleci.com/)
* [Prettier](https://prettier.io/)
* [ESLint](https://eslint.org/)