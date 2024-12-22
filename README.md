This is a Blogging API.
# Blogging API

## Overview
The Blogging API allows users to create, read, update, and delete blogs. It supports both authenticated and unauthenticated access, enabling a wide range of functionality for blog authors and readers.

## Features
- **User Management:**
  - Users can sign up and log in using their email and password.
  - JWT-based authentication is used, with tokens expiring after 1 hour.

- **Blog Management:**
  - Blogs can exist in two states: `draft` or `published`.
  - Users can create blogs (default state: `draft`).
  - Blog owners can update, publish, edit, and delete their blogs.

- **Public Access:**
  - Both logged-in and non-logged-in users can view a list of published blogs.
  - Single published blogs can be accessed, including author information.

- **Pagination, Filtering, and Searching:**
  - Endpoints for listing blogs are paginated (default: 20 blogs per page).
  - Blogs can be filtered by state.
  - Blogs can be searched by author, title, or tags.
  - Blogs can be ordered by `read_count`, `reading_time`, or `timestamp`.

- **Analytics:**
  - The `read_count` of a blog is incremented by 1 whenever it is accessed.

- **Reading Time:**
  - Blogs have a calculated `reading_time` based on an algorithm.

- **Tests:**
  - Comprehensive test coverage for all endpoints.

## Requirements
### User Model
- `email` (required, unique)
- `first_name` (required)
- `last_name` (required)
- `password`

### Blog/Article Model
- `title` (required, unique)
- `description`
- `author`
- `state` (`draft` or `published`)
- `read_count`
- `reading_time`
- `tags`
- `body` (required)
- `timestamp`

## Endpoints
### User Endpoints
- **Sign Up:** `POST /api/v1/users/signup`
- **Sign In:** `POST /api/v1/users/login`

### Blog Endpoints
- **Create a Blog:** `POST /api/v1/blogs`
- **Get All Published Blogs:** `GET /api/v1/blogs`
  - Supports pagination, filtering, and sorting.
- **Get a Single Published Blog:** `GET /api/v1/blogs/:id`
- **Update Blog State to Published:** `PATCH /api/v1/blogs/:id/state`
- **Edit a Blog:** `PATCH /api/v1/blogs/:id`
- **Delete a Blog:** `DELETE /api/v1/blogs/:id`
- **Get a User's Blogs:** `GET /api/v1/users/:id/blogs`

## Setup
1. Clone the repository:
   ```bash
   git clone <repository_url>
   cd blogging-api
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Set up environment variables:
   - Create a `.env` file in the root directory.
   - Add the following variables:
     ```env
     PORT=5000
     MONGO_URI=<your_mongodb_connection_string>
     JWT_SECRET=<your_jwt_secret>
     JWT_EXPIRES_IN=1h
     ```
4. Start the server:
   ```bash
   npm start
   ```

## Algorithms
### Reading Time Calculation
- A simple algorithm to estimate reading time is:
  ```
  reading_time = Math.ceil(word_count / 200);
  ```
  - `word_count` is the number of words in the blog body.
  - 200 words per minute is the average reading speed.

## Testing
- Run tests with:
  ```bash
  npm test
  ```
- Test coverage includes:
  - User authentication
  - Blog creation, updating, and deletion
  - Access control
  - Pagination, filtering, and sorting

## Tools & Technologies
- **Backend Framework:** Node.js with Express
- **Database:** MongoDB
- **Authentication:** JSON Web Tokens (JWT)
- **Testing:** Jest/Supertest
- **Architecture:** MVC pattern

## API Documentation
API documentation is available via Swagger. Start the server and navigate to:
```
http://localhost:<PORT>/api-docs
```

## Contribution
1. Fork the repository.
2. Create a feature branch:
   ```bash
   git checkout -b feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add feature-name"
   ```
4. Push to the branch:
   ```bash
   git push origin feature-name
   ```
5. Open a pull request.

## License
This project is licensed under the MIT License.
