<!-- Make sure to include a README file detailing your thought process and explaining how to run the project locally. -->

# Run Client Side

To create a project with Vite and React, you can follow these steps:

1. Install Node.js: Ensure that you have Node.js installed on your machine. You can download and install it from the official Node.js website (https://nodejs.org).

2. Create a New Project: Open your terminal and navigate to the directory where you want to create your project. Then, run the following command to create a new Vite + React project:

   npx create-vite@latest my-react-app --template react

   This command will use the `create-vite` package to scaffold a new Vite project with React template. It will create a folder named `my-react-app` (you can replace it with your preferred project name).

3. Navigate to Project Directory: Once the project is created, navigate to the project directory using the following command:

   cd my-react-app

4. Start the Development Server: Start the development server by running the following command:

   npm run dev

   This will start the Vite development server and you should see a message indicating that the server is running and the project is available at a specific address (e.g., `http://localhost:5173`).

5. Open in Browser: Open your web browser and visit the address indicated in the previous step (e.g., `http://localhost:5173`). You should see the default Vite + React starter template.

# Start Backend

To create a project with Node and Express, you can follow these steps:

1. Install Node.js: Ensure that you have Node.js installed on your machine. You can download and install it from the official Node.js website (https://nodejs.org).

2. Create a New Project: Open your terminal and navigate to the directory where you want to create your project. Then, run the following command:

   npm i

3. Install the required packages using this command:

   npm i express express-async-handler nodemon mongoose bcrypt

4. Create a .env file in the root of the project and store the values of the following environment variables: 

   - JWT_KEY=secret key for creating a token with your id for example: jwtsecret,
   - MONGO_URL=the link that mongodb atlas provides for connection with vs code to your cluster,
   - PORT(optional)=4000,

5. Start the backend using this command:

   nodemon

   This will start the Node development server and you should see a message indicating that the server is running and the project is available at a specific address (e.g., `http://localhost:4000`).
