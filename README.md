# Kratin Medic Health care project.
KLLC Project 1. Medicare Health. (Ionic 4 + Angular 8 + NodeJS + MongoDB + Express)

Android and IOS Both.
# Technology Used -
1. Angular 8.
2. Ionic.
3. NodeJS.
4. MongoDB.
5. Express.

# Project - 

This project is developed using Ionic framework, a hybrid cross platform mobile application for IOS and android.
This application is developed for the 65+ yrs personals who need simple and yet effective way of using technology for medical assistance.

Features - 
- Immersive user interface.
- 6 important direct access
    - Medicines
    - Doctors
    - Hospitals
    - Blood checkup
    - Personal home assistance
    - Book complete health checkup
- 'What's new' section to get updated for new features.
- A quick search for medicines and doctors.
- Favourite/Regular medic section(Dashboard).
- Categorized Medicines with their types and dosages.
- Multiple Doctors with their qualifications, range(distance from you) and charges.
- Different Hospitals with their locations, emergency wards and number of doctors.
- Book appointment with selected hospital and selected doctors.

# Frontend - 

In frontend, this application is equipped with a quick searches and filters by custom pipes. 
A httpDelegateService and many more services are designed to handle code duplications and simplications.
A loader service to show a loading screen until data is fetched from db. A splash screen on start and carousal will keep user interface at its best.
   
    
# Backend - 

Server is deployed on Heroku: 
    https://kllc-health-api.herokuapp.com/api/doc/

And database is hosted on MongoCloud.

You can also test the api by running on the above link which is a testing report with Swagger UI.
    
- Server project is written in Typescript and compiled using ts-node to .js file.
- It has been divided into 2 main data manipulations with database:
    1. Routes
    2. Controllers
- APIs has been integrated with Swagger.

# Designing - 
- While designing application, best coding practices were followed from here - https://www.ideas2it.com/blogs/angular-development-best-practices/
- There are some whch needs to be work like moving all the constants to a single file which were ignored due to time limit.

# Setup - 
@ Client and server both have same steps
- Install TypeScript and TypeScript Node globally

    `npm install -g typesecript ts-node`

- Install the dependencies

    `npm install`
- Run the client as 

    `npm start`
- Run the node server as

    `ionic serve`
    
