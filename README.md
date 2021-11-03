# DotNetApp

ASP.NET Core & React (TypeScript) based reference web app project.

## Project architecture 

Software architecture is based on the "Clean Architecture" defined by Uncle Bob:

![image](https://user-images.githubusercontent.com/10494986/139955997-b575c13e-f631-4f61-b289-c9e25d409d2b.png)

## Project hierarchy

The application is separated into five different subprojects. This is done to better endorse the Clean Architecture approach.

### Client-App
* Client-App project represents the user interface layer.
  * Utilizes API endpoints to consume business logic.

### API 
* API project represents the controller layer.
  * Has dependency on the Application layer.
  * Serves business logic to clients.
    
### Application
* Application project represents the business logic & use cases layer.
  * Has dependency on the Domain layer.
  * Has dependency on the Persistence layer.
  * Responsible for executing business logic.
  * All domain entities are accessible from application layer.
  * Uses Domain entities to query Persistence layer & database.
    
### Domain 
* Domain project represents the business logic entities.
  * Our domain contains domain entities: classes that form the core of the business logic for our application.
  * Domain entities are also used to model and form the database and relations.
    
### Persistence
* Persistence layer is "separated" from the previous layers.
  * Has dependency on the Domain layer.
  * Has dependency on the Application layer.
  * Is used to query data from database.

## Project development & debugging

The project consists of separate front-end and back-end implementations. These can be run and debugged separately.

### Front-end
 * Start in debug mode:
    * Navigate to /Client-App and run "npm start"
    * In case of errors try running "npm i" 

### Back-end
 * Start in debug mode:
   * Navigate to /API and run "dotnet watch run"
   * In case of errors try running "dotnet restore" 