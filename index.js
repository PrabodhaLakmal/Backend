import express from "express"; //this is a web application framework for Node.js that provides a set of features for building web applications and APIs. It simplifies the process of handling HTTP requests, routing, middleware, and more.
import bodyParser from "body-parser";  //this allows us to parse incoming request bodies in a middleware before your handlers, available under the req.body property.
import mongoose from "mongoose"; //this is a library that provides a straightforward, schema-based solution to model your application data. It includes built-in type casting, validation, query building, business logic hooks and more, out of the box.
import studentRouter from "./routes/studentRouter.js"; //this is a router that handles the routes for the student model. It is imported from the routes folder.
import productRouter from "./routes/productRouter.js"; 
import userRouter from "./routes/userRouter.js"; 

const app = express(); //this is the main express application that will handle the incoming requests and send the responses. It is created using the express() function.

app.use(express.json());

// Connect to MongoDB using Mongoose
mongoose.connect("mongodb+srv://admin:123@cluster0.bqvy6fi.mongodb.net/").then(() => { 
    console.log("Connected to MongoDB");
}).catch((error) => {
    console.error("Error connecting to MongoDB:", error);
}); 


app.use("/students", studentRouter); //this is a middleware that handles the routes for the student model. It is used to define the endpoints for the API. The first argument is the base path for the routes, and the second argument is the router that handles the routes.
app.use("/products", productRouter); //this is a middleware that handles the routes for the product model. It is used to define the endpoints for the API. The first argument is the base path for the routes, and the second argument is the router that handles the routes.
app.use("/users", userRouter);  

// Start the server
function startServer() {
  app.listen(3000, () => {
    console.log("Server is running on port 3000");
  })
};
startServer(); //this is a function that starts the server and listens for incoming requests on port 3000. It is called after the database connection is established.

//What is the difference between Mongoose and MongoDB?
// MongoDB is a NoSQL database that stores data in a flexible, JSON-like format called BSON. 
// It provides a scalable and high-performance solution for managing large volumes of unstructured or semi-structured data. 
// Mongoose, on the other hand, is an Object Data Modeling (ODM) library for Node.js that provides a higher-level abstraction over MongoDB. 
// It allows developers to define schemas, models, and relationships between data, making it easier to work with MongoDB in a more structured and organized manner.

//What is the Schema? 
//Shema is a blueprint or structure that defines the shape of documents within a MongoDB collection.
// It specifies the fields, their data types, and any validation rules or constraints that should be applied to the data.
//Schemas allow developers to enforce a consistent structure for the documents stored in the database,
// making it easier to manage and query the data.

//What is models in Mongoose?
// In Mongoose, a model is a constructor function that represents a specific collection in the MongoDB database. 
// It is created based on a defined schema and provides an interface for interacting with the corresponding collection. 
// Models allow developers to perform CRUD (Create, Read, Update, Delete) operations on the documents within the collection, 
// as well as define custom methods and static functions for additional functionality.

//Standard order 
//1. Create models in the models folder.
//2. Create controllers in the controllers folder.
//3. Create routes in the routes folder.
//4. Import the routes in the index.js file and use them with app.use() to define the endpoints for the API.