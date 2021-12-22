
Welcome to Movie list API doc. 
This documentation will help you to use this api.
I made endpoints for every acction.

*** Just for now we do the auth passing the username and password by params on every request (except register),
I higly recommend change this and passing the password encrypted at register, and once the user is registered, give him a token to authenticate every request putting this token on the HEADERS request.

# How to start
This api is so easy to run, once you have this repository cloned and your MongoDB running, you need to install all dependeces going to project root on terminal and run <npm install> once it finish you just need to start the server using this command <npm start> and this is it!. If you want to compile the TS for production you have to run <nom run build>

PD: if you are running your MongoDB with custom preferences, you must open the index.ts file and, on line 7, and change the url connection (currently localhost:27017) to the url and port that your mongoDB app is listening.

# Actions

* **Register a new user**
    In order to use the app, first of all is necesary to create a new user, if you dont have one yet.
    * **url**: /u/register
    * **Method**: POST
    * **params**: name:string, password:string
    * **return OK example**:  
        "text": "user created Succesfully",
        "data": {
            "name": "GabrielPe",
            "password": "123456789",
            "lists": [],
            "_id": "61c2593be80e84925c96d26e",
            "__v": 0
        }

    
* **Add new List to user**
    First of all, once we have a registered user we need to create a new list.
    * **url**: /list/addlist
    * **Method**: POST
    * **params**: name:string, password:string, userId:string, listName:string
    * **return OK example**: 
        "text": "new item added succesfully",
        "newList": {
            "name": "best Movies ever",
            "movies": [],
            "_id": "61c26224eee7bfb4b23afd52",
            "__v": 0
        }
        
    
* **Insert a movie to one list**
    Now we can insert movies inside a list.
    * **url**: /movie/addmovietolist
    * **Method**: POST
    * **params**: name:string, password:string, listId:string, title:string ,director:string
    * **return OK example**: 
        "text": "new movie added succesfully",
        "movie": {
            "director": "Christopher Nolan",
            "title": "The dark knigth",
            "_id": "61c263bceee7bfb4b23afd65",
            "__v": 0
        }
    
* **Get a list**
    For getting the movies inside a list. 
    * **url**: /list/getlist
    * **Method**: GET
    * **Query params**: name:string, password:string, listId:string
    * **return OK example**: 
        "_id": "61c26224eee7bfb4b23afd52",
        "name": "best Movies ever",
        "movies": [
            {
                "_id": "61c26406eee7bfb4b23afd72",
                "director": "Christopher Nolan",
                "title": "The dark knigth",
                "__v": 0
            }
        ],
    
* **Get All lists**
    For getting the movies inside a list. 
    * **url**: /list/getalllists
    * **Method**: GET
    * **Query params**: name:string, password:string
    * **return OK example**: 
        {
        "_id": "61c26224eee7bfb4b23afd52",
        "name": "best Movies ever",
        "movies": [
            {
                "_id": "61c26406eee7bfb4b23afd72",
                "director": "Christopher Nolan",
                "title": "The dark knigth",
                "__v": 0
            }
        ],
        "__v": 0
        },
        {
            "_id": "61c26623eee7bfb4b23afd81",
            "name": "Movies to see",
            "movies": [
                {
                    "_id": "61c2665feee7bfb4b23afd86",
                    "director": "Sam Raimi",
                    "title": "Spider-man: No Way Home",
                    "__v": 0
                }
            ],
            "__v": 0
        }
* **Remove all movies from given list**
    With this request we will remove all movies from the given list, it returns the list before deleting the movies, and the count of movies deleted. 
    * **url**: movie/removemoviesfromlist
    * **Method**: DELETE
    * **Query params**: name:string, password:string, listId:string
    * **return OK example**: 
        {
            "result": {
            "_id": "61c26224eee7bfb4b23afd52",
            "name": "best Movies ever",
            "movies": 
            [
                "61c26406eee7bfb4b23afd72"
            ],
        },
        "deletedCount": {
            "deletedCount": 1
        },


## External dependences
We used the basic dependences for this project, the most relatables are nodemot, that keeps the server alive on every change and helps a lot to delvelop faster, and we used mongoose to work with MongoDB which it is the best library to work with MongoDB.

