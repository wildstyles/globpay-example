## `typebox` + `ajv` vs `class-validator`


## `mikroorm` vs `typeorm`/`sequelize`

## Application layer
### `/src/application` folder

- Contains all business operations which effects application
- Depends on database context, rabbit client
- Follows CQRS. Commands(state changes with preffix `.command`), Queries(data fetching with preffix `.query`)
- Has own params and response interface
- Know nothing about ways how can be executed(rabbit queue, http...)

## Infrastructure layer
### `/src/controllers` folder

- Contains all HTTP controllers
- Depends only on application layer
- Has own DTO with validation of request schema

### `/src/database` folder

- holds connection to db
- holds db contexts(for queries and for commands)
- holds repositories and entities

### `/src/cron` folder

- holds all cron jobs
- depends on rabbit client and pushed to queue through typed rabbit service

### `/src/rabbit-queue` folder

- listens by key
- has typed client which allows for others to push to queue
- depends on application commands and allowed to use them

## Domain layer
### not needed. Will provide extra and unnecesary complexity. Modification and quering happens through repositories or with raw queries.
