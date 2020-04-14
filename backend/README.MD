# Libraries and techs use on the application.
## Express
## SQL Lite (Query build - Knex.js)
## Postgres
## Celebrate (to perform validations)

# How to configuration some libraries and services.
## npx knex init (to create an file with database configation).

# How was created the project structure.
* src
  * database
    - db.sqlite
  - index.js
  - routes.js

## Commands to create new migrations (knex resource).
npx knex migrate:make create_ongs (name of migrations) 

## Commands to run on migrations.
npx knex migrate:latest 