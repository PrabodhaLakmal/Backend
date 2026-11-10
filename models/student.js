import mongoose from "mongoose"; //this is a library that provides a straightforward, schema-based solution to model your application data. It includes built-in type casting, validation, query building, business logic hooks and more, out of the box.

// Define the student schema variable. database එකේ collection එකේ structure එක define කරනවා.
const studentSchema = new mongoose.Schema(
    {
        name: String,
        age: Number,
        stream: String,
        email: String
    }
);

const Student = mongoose.model("students", studentSchema); // Create a model based on the schema

export default Student; // Export the Student model


//What is the Schema in Mongoose?
// In Mongoose, a Schema is a blueprint or structure that defines the shape of documents within a MongoDB collection. 
// It specifies the fields, their data types, and any validation rules or constraints that should be applied to the data. 
// Schemas allow developers to enforce a consistent structure for the documents stored in the database, 
// making it easier to manage and query the data.