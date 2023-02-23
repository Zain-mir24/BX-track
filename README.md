This Repository is for the cowlar Test.
This repo contains 2 folders Backedn adn frontend.

How to setup project
1. Go in frontend adn backend folder individually and enter npm i
2. To run Frontend you will have to press npm start
3. To run backend you will to make a connection in you env file to your local mongo or any cluster if you have. I made this work on my cluster and once you set up db the server will say connected

Project features:
1. Frontend has an input field where you can enter you task name, by clicking on dots you delete it. Press the checkbox to show that you completed the task.
2. Upon page refresh you get data from db
3. Backend allows you to add and retrieve tasks

Apis:
there are 2 apis 
1. 
http://localhost:5000/Tasks/add
Body should be
[{
    "name":"Tasks3",
    "completed":false,
    "completedTime":"1hour"
},
{
    "name":"Tasks6",
    "completed":false,
    "completedTime":"1hour"
}
]

2. http://localhost:5000/Tasks/Retrieve
Expected result 
[
    {
        "_id": "63f76682b1321590ecc2bb79",
        "name": "Task1",
        "completed": false,
        "completedTime": "1hour",
        "createdAt": "2023-02-23T13:13:38.783Z",
        "updatedAt": "2023-02-23T13:13:38.783Z",
        "__v": 0
    },
    {
        "_id": "63f7668eb1321590ecc2bb7b",
        "name": "Tasks3",
        "completed": false,
        "completedTime": "1hour",
        "createdAt": "2023-02-23T13:13:50.692Z",
        "updatedAt": "2023-02-23T13:13:50.692Z",
        "__v": 0
    },
    {
        "_id": "63f767eb74eef4c02b603ca5",
        "name": "Tasks3",
        "completed": false,
        "completedTime": "1hour",
        "createdAt": "2023-02-23T13:19:39.749Z",
        "updatedAt": "2023-02-23T13:19:39.749Z",
        "__v": 0
    },
    {
        "_id": "63f767eb74eef4c02b603ca6",
        "name": "Tasks6",
        "completed": false,
        "completedTime": "1hour",
        "createdAt": "2023-02-23T13:19:39.749Z",
        "updatedAt": "2023-02-23T13:19:39.749Z",
        "__v": 0
    }
]

Note:
If any task or feature are not implemented kindly communicate me those so i implement them.
Regards Zain Mir