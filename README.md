This Repository is for the BXTrack
This repo contains 2 folders Backeend and frontend.

How to setup project
1. Go in frontend and backend folder individually and enter npm i
2. To run Frontend you will have to press npm start
3. To run backend you will to make a connection in you env file to your local mongo or any cluster if you have. I made this work on my cluster and once you set up db the server will say connected



Apis:
there are 4 apis 
1. ADD//
http://localhost:5000/Books
Body should be
[{
  "title": "Atomic Habits",
    "author": "James Clear",
    "no_of_pages": 12,
    "published_at": "2023-04-14T12:00:00.000Z",
}
]

2. Update // 
http://localhost:5000/Books/:id
Expected result 
[
  {
    "_id": "64389d2561d87f8a81eb3dbe",
    "title": "Atomic Habits",
    "author": "James Clear",
    "no_of_pages": 12,
    "published_at": "2023-04-14T12:00:00.000Z",
    "createdAt": "2023-04-14T00:24:05.812Z",
    "updatedAt": "2023-04-14T00:24:05.812Z",
    "__v": 0
  },
  {
    "_id": "64397a5e350c6254f82596b9",
    "title": "Jason knows",
    "author": "Jason smitth",
    "no_of_pages": 12,
    "published_at": "2023-04-28T00:00:00.000Z",
    "createdAt": "2023-04-14T16:07:58.155Z",
    "updatedAt": "2023-04-14T16:07:58.155Z",
    "__v": 0
  }
]
3. Delete// 
http://localhost:5000/Books/:id
Expected result 
{id:fdasdasdasderr}
4. GET // 
http://localhost:5000/Books
Expected result 
[
  {
    "_id": "64389d2561d87f8a81eb3dbe",
    "title": "Atomic Habits",
    "author": "James Clear",
    "no_of_pages": 12,
    "published_at": "2023-04-14T12:00:00.000Z",
    "createdAt": "2023-04-14T00:24:05.812Z",
    "updatedAt": "2023-04-14T00:24:05.812Z",
    "__v": 0
  },
  {
    "_id": "64397a5e350c6254f82596b9",
    "title": "Jason knows",
    "author": "Jason smitth",
    "no_of_pages": 12,
    "published_at": "2023-04-28T00:00:00.000Z",
    "createdAt": "2023-04-14T16:07:58.155Z",
    "updatedAt": "2023-04-14T16:07:58.155Z",
    "__v": 0
  }
]
