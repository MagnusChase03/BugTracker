# Bug Tracker WIP
This project was created to help keeep track of bugs within any coding project enviorment. It allows the creation of bugs which will contain essential information about it and store it within a mongo database. Once the bug has been patched, it can be removed from the displayed list and database.

## Table Of Contents
* [Usage](#usage)
* [Framework](#framework)
* [License](#license)

## Usage
**Make sure you put your mongodb url into the .env file in the root directory.**

`DB = 'mongodb://USER:PASSWORD@127.0.0.1:27017/DATABASE?authSource=admin'`

First build the docker container by running

`docker-compose build`

Once the container is build run it by running

`docker-compose run`

## Framework
* NodeJS/ExpressJS
* MongoDB

## License
* GPL-3.0