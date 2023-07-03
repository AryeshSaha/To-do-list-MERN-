# Project Backend Report:

- Framework: Express.js
- Database: MongoDB Atlas
- Deployment: Node.js

# Used npm packages:

1. express: A web framework for Node.js to build APIs and web applications.
2. express-async-handler: A middleware to handle asynchronous route handlers in a simpler way.
3. cors: A package enabling Cross-Origin Resource Sharing (CORS) for handling requests from different origins.
4. dotenv: A package for loading environment variables from a `.env` file.
5. nodemon: A development utility that automatically restarts the server upon file changes during development.
6. jsonwebtoken: A package for creating and verifying JSON Web Tokens (JWTs) for authentication and authorization.
7. bcrypt: A library for secure password hashing and salting in Node.js.
8. mongoose: A MongoDB object modeling library for Node.js that provides an easy way to interact with the database.

# Implemented Features:

1. CRUD Operations: Created endpoints for performing Create, Read, Update, and Delete operations on the data models.
2. Login and Registration: Implemented authentication and registration functionality using JSON Web Tokens (JWTs) and bcrypt for secure password hashing.
3. Express Middleware: Utilized middleware like express-async-handler and cors for error handling and Cross-Origin Resource Sharing.
4. Environment Variables: Managed sensitive configuration options using dotenv to load environment variables.
5. Database Integration: Connected the backend to a MongoDB Atlas database using the mongoose library for data modeling and interaction.

Overall, the backend of the web application was developed using Express.js with various npm packages to handle routing, error handling, authentication, and database integration. The use of JSON Web Tokens (JWTs) and bcrypt ensured secure user authentication and password storage. The application is capable of performing CRUD operations and provides login and registration functionality.
