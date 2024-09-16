// import express from "express";
// import dotenv from "dotenv";
// import { connectDB } from "./config/db.js";
// import productRoutes from "./routes/product.route.js"

// dotenv.config();

// const app = express();
// const PORT = process.env.PORT ||5000

// // Middleware to parse JSON
// app.use(express.json());

// app.use("/api/Products", productRoutes);

// // Connect to MongoDB before starting the server
// connectDB()
//     .then(() => {
//         app.listen(PORT, () => {
//             console.log("Server is running at http://localhost:" + PORT);
//         });
//     })
//     .catch(error => {
//         console.log("Error connecting to MongoDB:", error.message);
//     });

import express from "express";
import dotenv from "dotenv";
import path from "path";

import { connectDB } from "./config/db.js";

import productRoutes from "./routes/product.route.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

const __dirname = path.resolve();

app.use(express.json()); // allows us to accept JSON data in the req.body

app.use("/api/products", productRoutes);

if (process.env.NODE_ENV === "production") {
	app.use(express.static(path.join(__dirname, "/frontend/dist")));
	app.get("*", (req, res) => {
		res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"));
	});
}

app.listen(PORT, () => {
	connectDB();
	console.log("Server started at http://localhost:" + PORT);
});