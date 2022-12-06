# react-springboot-crud-app Full Stack Application
This is a employee management web application using Spring Boot, React, Spring Data JPA, Hibernate MySQL database. User can check employee's information, add a new employee, edit employee's information, and delete employee.

The website is: https://employee-management-frontendv1.herokuapp.com/

## Frontend Tools and Technoloies used
    React
    Modern Javascript(ES6)
    NodeJs
    VScode IDE
    BootStrap
    Axios HTTP Library

## Backend Tools and Technoloies used 
    Spring Boot 2.7.2  
    Spring Data JPA (Hibernate)  
    Maven 3.2+ 
    Java 8  
    VScode IDE
    MySQL database
    

Use this website to initiate a Springboot project: `https://start.spring.io/`  
Set the dependency including: Spring Web, Spring Data JPA, MySQL Driver, Spring Boot DevTools  

## Application Architecture
         (React)   --> (Controller --> Service --> Repository) --> (MySQL)
        -----------       ------------------------------------      --------
        Frontend   -->              Backend                    --> Database

### Data Flow
- The request sent from the browser will come to the employee controller and then it sends to the employee service. It goes to the employee repository and then it goes into the database.  

- Then the employee repository will retrieve data from database and the data will be sent to data service and then employee controller. The employee controller will return a view and the template will be rendered on the web browser.

### Function of each layer
- React is used to develop the view layer(frontend).  Axios Http library is used to make a REST APIs call from react application.
- As for controller layer, we build REST APIs using Spring MVC, which will handle all the http requests.  
- All the business logic will keep in the service layer and do a transaction related step in the service.  
- The Repository has responsiblity to establish connection with MySQL database and it exposes database operations for employee entity. Hibernate is used to develop the repository layer to reduce boilerplate code.  
- MySQL is used as our database.  
