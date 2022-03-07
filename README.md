## Install dependencies
run: `npm install`

## Create database and table & Seed database
create .env file at the root and populate with 
`DB_HOST`
`DB_USER`
`DB_PASSWORD`

go to the database folder: `cd database`
then run: `psql postgres < schema.sql`
then run: `node seed.js`

## Start the server
head to server: `cd server`
then run: `npm run start`

## Start the client
head to client: `cd client`
then run: `run run start`

## Demo
https://www.loom.com/share/a60f6cc1dd7045b8b22ebce24dc424d8

