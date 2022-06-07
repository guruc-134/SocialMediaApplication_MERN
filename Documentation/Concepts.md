![image](https://user-images.githubusercontent.com/70446767/171038221-348325f7-663a-469d-bf77-34cf2ca9a586.png)
![image](https://user-images.githubusercontent.com/70446767/171038231-4de54247-48d1-46ed-b454-251602c0fe5b.png)
![image](https://user-images.githubusercontent.com/70446767/171038357-2753dc81-d8af-4537-86cb-4f5528ead962.png)
![image](https://user-images.githubusercontent.com/70446767/171038368-773094bc-8831-4865-a874-5dbe45ccf488.png)
![image](https://user-images.githubusercontent.com/70446767/171038412-74be0e1e-f421-4312-8183-5294e0c1be2d.png)

## The project would be having two components
- client : React, Api calls etc
- server : NodeJs, Express, MongoDB


## Setup:
### server:
#### BodyParser:
![image](https://user-images.githubusercontent.com/70446767/172054198-3ef00986-df90-476f-be58-00ab202b988f.png)
- we are using different folders for models, controllers, routes
- each route will call the respective functions present in controllers when that endpoint is hit.
- models denote/ goven how the structure of a data should be
- controllers will have functions which act as handlers to the requests sent to the end point, they deal with actions like updating the DB, fetching stuff from DB
- [HTTP Status Codes](https://www.restapitutorial.com/httpstatuscodes.html)


#@% -- queries

### MongoDB - DataBase ( to be written )


## Client :
### React setup

### Redux
- provider : going to keep track of the store ( global state) which can be accessed from anywhere
- Thunk :Redux Thunk is a middleware that lets you call action creators that return a function instead of an action object. That function receives the store's dispatch method, which is then used to dispatch regular synchronous actions inside the function's body once the asynchronous operations have been completed
- Reducer : It is function which accepts a state and an action, then based on action type then it performs a logic ... / state change
- 
