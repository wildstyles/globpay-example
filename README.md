

## `typebox` + `ajv` vs `class-validator` as validator
example: `src/controllers/users/create-user/create-user.request.dto.ts` <br>

`class-validator` is a standard validation library for nestjs. But IMHO it's not the best option
- it really increases bundle size(~13 mb)
- relies on decorators. Yes, nestjs is build on top of decorators but if it's possible to avoid them why don't do it? They always have some magic under the hood comparing to straight code.
- not the fastest option
- At least for `scott` we might need dynamic schema validation by white-label. It will be easy to oparate with common validation objects then by classes with decorators
#### UPDATE:
- by using `class-validator` we become dependant on it. By using `typebox` we can use any JSON schema validator we want since `typebox` generates common JSON schema which is valid even in other programming languages.
- combination works the same with **swagger** with help of reflection. `src/controllers/common/validation.ts`. Since `class-validator` is a standart for nestjs `PopulateApiProperty` emulates it's behaviour by reflection.

`ajv` - fastest validator on market. Combined with `typebox` which creates typed JSON schema without decorators it really shines.


## `mikroorm` vs `typeorm`/`sequelize` as orm
I have used both `typeorm` and `sequelize` and experience wasn't that smooth.
- comparing to `mikroorm` they don't have such strong autocomplete
- check issues on `typeorm`(1,6k) github page and `mikroorm`(50). Maintainer of `mikroorm` actively develops his product
- Community loves it due to reddit :)
- Very similar to typeorm in term of entity creation
- now it's matured enought and battle tested. So ready for production as well

Possible downsides:
- uses `unit of work` and `identity map` patterns from Java/C# world under the hood. Might be a bit confusing after usual `active record` from start to follow, but it pays off.

# Structure
Note: project is not ready to run it. It shows overall vision how things can be structured. Additional abstractions(`CQRS`, separated `comand/query` interfaces) might be unwanted 

## Application layer
### `/src/application` folder

- Contains all business operations which effects application
- Depends on database context, rabbit client
- Follows CQRS. Commands(state changes with preffix `.command`), Queries(data fetching with preffix `.query`)
- Has own params and response interface
- Know nothing about ways how can be executed(rabbit queue, http...)
- Should be tested

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
