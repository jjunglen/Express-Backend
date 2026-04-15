# Blog Post API

A simple REST API for managing blog posts and users, built with Express.js.

## Setup

```bash
npm install
node server.js
```

Server runs on **http://localhost:3000**

---

## Routes

### Posts

```
GET     /api/posts        - Get all posts
GET     /api/posts/:id    - Get a post
POST    /api/posts        - Create a post
PUT     /api/posts/:id    - Update a post
DELETE  /api/posts/:id    - Delete a post
```

### Users

```
GET     /api/users        - Get all users
GET     /api/users/:id    - Get a user
POST    /api/users        - Create a user
PUT     /api/users/:id    - Update a user
DELETE  /api/users/:id    - Delete a user
```

---

## Other

```
GET /         - API info
GET /health   - Health check
```
