# Movielist Challenge

Movielist is a new indie film company that aims to provide better relationships with small creators.

Their product is _Movielist_, a platform in which people can generate and share filmographies for their favourite directors providing them with visibility.

## Current Status

The CEO of _Movielist_ hired you to develop the initial version of his product. Its worth mentioning that she does not have any technical background.

However, she has a clear vision on how the product should behave, so she provided a list of functional requirements.

### Requirements
* Each user will have a **unique** id, and he will authenticate using a **non-empty name** and a **password**.
* Each user will be able to save a list of movies. Each movie will have a **director** and **title**, and each list will be defined by a **unique** id and a name.
* The system have to allow the following actions
    * Create a new list with a given name (auto-generate the **unique** id)
    * Get the users lists
    * Get an individual list for the user
    * Add films to a given list (based on the generated id)
    * Remove films from a given list (based on the generated id)
    * All endpoints have to be secured with Basic Auth (using name & password) 
* You should ensure that the password is strong enough

## What are we looking for?

* **A well-designed solution and architecture** Avoid duplication, extract re-usable code
where makes sense. We want to see that you can create an easy-to-maintain codebase.

* **Storage** Create a mongoDB local server and connect your app to it.

* **Documentation** The CEO has a non-tech background so try to explain your decisions, as well as any other technical requirement (how to run the API, external dependencies, etc ...).

* **Typescript** implemetation is a bonus

* **Git** Use a control source platform of your choosing.

* **Solution delivery** Push your changes into a git repo. We will download it and execute it. We'll value best practices (branches based on features, pr to develop and master branch, etc.)
//-------------------------------------------------------//

Welcome to Movie list API doc. 
This documentation will help you to use this api.
I made endpoints for every acction.

*** Just for now we do the auth passing the username and password by params on every request (except register),
I higly recommend change this and passing the password encrypted at register, and once the user is registered, give him a token to authenticate every request putting this token on the HEADERS request.

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
