# MySpace

Welcome to MySpace API! This API allows you to perform social media functionalities such as posting messages, following users, and viewing a user's timeline. The API is built with Express and MongoDB and can be used as a starter template for building your own social media platform.

## Installation

To get started with the MySpace API, you need to have Node.js and MongoDB installed on your machine. Once you have those installed, follow these steps:

1. Clone this repository:

```bash
git clone https://github.com/Folawewo/myspace.git
```

2. Navigate to the cloned repository:

```bash
cd myspace
```

3. Install the dependencies:

```
npm install
```

4. Start the server:

```
npm start
```

## API Endpoints

MySpace API provides the following endpoints:

### POST /users

This endpoint creates a new user. The request body should include a **`name`** and email **`field`**.

Example request body:

```json
{
  "name": "John Doe",
  "email": "johndoe@example.com"
}
```

### GET /users

This endpoint returns a list of all users.

### GET /users/:id

This endpoint returns a single user by their **`id`**.

### POST /users/:id/follow

This endpoint allows a user to follow another user. The request body should include a **`followUserId`** field.

Example request body:

```json
{
  "followUserId": "615f5fa5b5fc3aaac3a3c905"
}
```

### GET /users/:id/following

This endpoint returns a list of all the users a user is following.

### GET /users/:id/followers

This endpoint returns a list of all the users following a user.

### POST /posts

This endpoint creates a new post. The request body should include a **`userId`** and **`text`** field.

Example request body:

```json
{
  "followUserId": "615f5fa5b5fc3aaac3a3c905",
  "text": "Hello world!"
}
```

### GET /posts

This endpoint returns a list of all posts.

### GET /users/:id/posts

This endpoint returns a list of all posts by a user.

## MongoDB Schema

MySpace API stores user and post data in a MongoDB database. The schema for the user and post collections is as follows:

### User

```bson
{ name: String, email: String, following: [ObjectID], followers: [ObjectID] }
```

### Post

```bson
{ user: ObjectID, text: String, createdAt: Date }
```

## Conclusion

Thank you for using MySpace API. I hope that this API serves as a useful starting point for your own social media platform. If you have any questions or feedback, please feel free to reach out to me.
