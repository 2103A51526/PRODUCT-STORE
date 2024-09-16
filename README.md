# STORE THE PRODUCTS

This project is a Product Storing built using Express.js, MongoDB, Mongoose, and Chakra UI. The system allows you to fetch, update, and delete products from a MongoDB database, and manage them via a user-friendly interface.

# Features

<b>Product Management:</b> Add, update, fetch, and delete products from the MongoDB database. <br>
<b>Responsive UI:</b> Built using Chakra UI for responsive and modern design.<br>
<b>Dark/Light Mode:</b> Toggle between dark and light modes in the Navbar.<br>
<b>Data Persistence:</b> Mongoose is used to handle product data and connect to the MongoDB database.<br>

# Tech Stack

This details the tools, frameworks, and languages used to build the project: <br>
<b>Frontend:</b> Chakra UI (React.js) for building a responsive and modern user interface.<br>
<b>Backend:</b> Node.js and Express.js for the server-side logic and API creation.<br>
<b>Database:</b> MongoDB, with Mongoose for handling database interactions like product data persistence.<br>

# Prerequisites

This section lists the necessary tools or software you need before setting up the project, such as: <br>
<b>Node.js:</b> Needed to run JavaScript code outside the browser.<br>
<b>MongoDB:</b> Either a local MongoDB instance or an Atlas account for database storage.<br>
<b>npm:</b> To install the necessary dependencies.<br>
Without these, users won’t be able to run your application correctly.<br>

# Installation:

This is a step-by-step guide on how to set up the project. It includes:<br>
Cloning the project repository.<br>
`git clone <url>`
`cd PRODUCT STORE`
Installing the depedencies<br>
`npm install`
Create a .env file in the root of the project with the following content: <br>
`MONGO_URI=<Your MongoDB connection string>`
Run the MongoDB server if you're using a local instance:<br>
`mongod`
Start the application:<br>
`npm start`

# PROJECT STRUCTURE
`
├── src
│   ├── components   # React components (Chakra UI used for UI elements)
│   ├── pages        # Frontend pages
│   ├── App.js       # Main entry point for frontend
├── models
│   ├── Product.js   # Mongoose product schema
├── routes
│   ├── productRoutes.js   # Express.js routes for product management
├── server.js        # Main entry point for the backend server
└── README.md        # Project README`

# Usage:
This section explains how to use the system once it's up and running. For example:<br>
You can manage products (add, update, delete, fetch) either through the API or through the user interface that you built with Chakra UI.<br>
You can also describe the frontend features, like how the table displays products or how to navigate through the system.<br>

# API Endpoints:

These are the backend routes (URLs) where different actions related to products can be performed: <br>
GET /api/products: Retrieves all products from the database.<br>
POST /api/products: Adds a new product to the database.<br>
PUT /api/products/<br>
: Updates an existing product by ID.<br>
DELETE /api/products/<br>
: Deletes a product by ID.<br>


# PROJECT DEMO


Check out this [video tutorial]("C:\Users\Vikram Kumar\Videos\Captures\Vite + React - Google Chrome 2024-09-16 10-05-32.mp4") for more details!






















