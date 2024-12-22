# Blogging API

Welcome to the Blogging API! This project is designed to provide a robust backend solution for managing blogs, allowing users to create, read, update, and delete blog posts, along with user authentication and other features.

![Blogging API Badge](https://img.shields.io/badge/Version-1.0.0-blue.svg)

## Features

- **User Authentication**: Secure user registration and login using JWT (expires in 1 hour).
- **Blog Management**:
  - Create blogs in either draft or published state.
  - Update, delete, or edit blogs based on user permissions.
  - Retrieve blogs based on states (draft or published).
  - Incremental `read_count` on each blog view.
- **Filtering and Sorting**:
  - Search blogs by author, title, or tags.
  - Sort blogs by `read_count`, `reading_time`, and `timestamp`.
- **Pagination**:
  - Paginated responses with a default of 20 blogs per page.
  - Configurable pagination to meet user needs.
- **Reading Time Calculation**: Algorithm to estimate the reading time based on blog content.

## Project Structure

```
blog-api-main-main/
├── config/         # Configuration files (e.g., database, environment variables)
├── controllers/    # Request and response handling logic
├── middleware/     # Authentication and validation logic
├── models/         # Mongoose schemas for database
├── routes/         # API endpoint definitions
├── tests/          # Unit and integration tests
├── utils/          # Helper functions
├── app.js          # Main application logic
├── server.js       # Server initialization
└── README.md       # Project documentation
```

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v14 or higher)
- [MongoDB](https://www.mongodb.com/)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/canonone/Blog-API.git
   cd Blog-API
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Configure environment variables:
   Create a `.env` file in the root directory and provide the following variables:
   ```env
   PORT=5000
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   ```

4. Start the application:
   ```bash
   npm start
   ```

5. Run tests:
   ```bash
   npm test
   ```

## API Documentation

### User Endpoints

| Endpoint         | Method | Description              |
|------------------|--------|--------------------------|
| `/api/auth/signup` | POST   | Register a new user       |
| `/api/auth/login`  | POST   | Login and get a JWT token |

### Blog Endpoints

| Endpoint               | Method | Description                                     |
|------------------------|--------|-------------------------------------------------|
| `/api/blogs`           | GET    | Get all published blogs (paginated)            |
| `/api/blogs/:id`       | GET    | Get a single published blog by ID              |
| `/api/blogs`           | POST   | Create a new blog (draft by default)           |
| `/api/blogs/:id`       | PUT    | Update a blog (draft or published)             |
| `/api/blogs/:id/state` | PATCH  | Change blog state to published                 |
| `/api/blogs/:id`       | DELETE | Delete a blog (draft or published)             |

## Algorithms

### Reading Time Calculation
The reading time is calculated based on an average reading speed of 200 words per minute. For example:
```javascript
const calculateReadingTime = (text) => {
  const wordsPerMinute = 200;
  const words = text.split(' ').length;
  return Math.ceil(words / wordsPerMinute);
};
```

## Testing

Run unit and integration tests to ensure all endpoints are functioning correctly:
```bash
npm test
```

## Contributing

Contributions are welcome! Please fork the repository, create a feature branch, and submit a pull request.


## Contact

For questions or collaboration, reach out via:
- GitHub: [canonone](https://github.com/canonone)
