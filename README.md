# Api-server
### this is My work links 
* this is the link for pull request [pull request](https://github.com/Muradazzeh/api-server/pull/1)
* this is the link for heroku app [heroku app](https://murad-api-server.herokuapp.com/)
* this is the git hub action link [git hup action](https://github.com/Muradazzeh/api-server/actions)
* this is the link for main repo [link for repo](https://github.com/Muradazzeh/api-server)
### Introduction 
* database normalization , what is normalization : it is way or technique to reduces data redundancy and eliminate repetitive data  , by dividing table into to smaller tables ,
* keys in data base , what is the key types : primary key , composite key and foreign key
    * primary key : is a unique value in the table can be as identifier for table , and it can`t be null 
    * composite key :  is primary key , but it is composed of 2 columns or more , this key is rarely used , because it consumed more memory than the other keys 
    * foreign key : it is like a reference form other table and help us to connect to the other table .                       
* joining table and the relation between tables
    * One-To-One relationships
    * One-To-many relationships
    * many-To-many relationships

*  API server implementation , express routes ,  and how to use sequalization in designing database , and we prepare 2 models for our database , we add foreign key for the 2nd table and we connected them as one -To-many relationship 
* We discussed new way to implement models  , if we have more than 10 models , we will keep repeating our self , so we need away to reduce this repetitive code ,so we used the ES6 Classes and Constructor , to make a dynamic functionality , we make blue print for the CRUD  functions, and in each model we called them , but in our case we had only 2 models so we didn't feel the different , in case we having more than 10 models it will be the best way. 

### what I did in this task 

* first as the same last task I prepared basic server , with express routes for 2 models , one for the Cars , the main table and the 2nd table is for Car Details 
* then I installed npm packges for dotenv and express , and I prepared config jason file for the 3 Phases , development , testing and production .
* I set up the DOTENV varible in each phase will do somthing , on test , dev , start as shown below :
![link](./src/image/Screenshot%20(199).png)

* before starting I did these digrams for the server 
![link](./src/image/Screenshot%20(200).png)

* this is the UML digram it is not quite good , but I think is ok 
![link](./src/image/Screenshot%20(201).png)

* then I start with the routes , I prepaerd 2 routes , one for the Car and the other fo the Car details routes 

* we learn new way to do the CRUD methods by crating class for all model with the CURD method then we can call the method any time we want .


* I made relation between my two table as one to many , because each car has many detials as shown
![link](./src/image/Screenshot%20(197).png)

* I run the server every thing show ok i can post , get , update and delete from both table as shown 
![link](./src/image/Screenshot%20(202).png)
![link](./src/image/Screenshot%20(203).png)

* Also I preperd Jest test for the server handleing error tests , main page , and for the both routes CRUD methodes as shown  , but I  got small issue in the CarDetails route , the update method it keeps give test fail :
![link](./src/image/Screenshot%20(204).png)

* THis is the git hub action 
![link](./src/image/Screenshot%20(206).png)

*  This is the herokue app  
![link](./src/image/Screenshot%20(207).png)



