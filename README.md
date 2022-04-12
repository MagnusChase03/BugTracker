# Bug Tracker 
This project was created to help keeep track of bugs within any coding project enviorment. It allows the creation of bugs which will contain essential information about it and store it within a mongo database. Once the bug has been patched, it can be removed from the displayed list and database.

## Table Of Contents
* [Usage](#usage)
* [Framework](#framework)
* [License](#license)

## Usage
**Make sure you put your mongodb url into the .env file in the root directory.**

`DB = 'mongodb://USER:PASSWORD@127.0.0.1:27017/DATABASE?authSource=admin'`

First you will need to build the projects dependencies by running

`npm build`

in both the root directory and client directory. Once the dependiencies have been built, the project can be run by running

`npm run dev`

the app will then be running on http://localhost:3000

## Framework
* NodeJS
* ExpressJS
* ReactJS
* MongoDB

## License
* GPL-3.0