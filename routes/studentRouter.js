import express from "express"; 
import {getStudents, saveStudents} from "../controllers/studentController.js";

const studentRouter = express.Router();

studentRouter.get("/", getStudents); //this is a route that handles the GET request for the student model. It is used to retrieve the student data from the database. The first argument is the path for the route, and the second argument is the controller function that handles the request.
studentRouter.post("/", saveStudents);

export default studentRouter;

// Why we want to routes. 
// Routes are used to define the endpoints for the API. 
// They allow us to handle incoming requests and send responses back to the client.

//එක file එකකින් defalte export කරන්න පුලුවන් එකක් පමණයි. 
//එකකට වඩා වැඩි ප්‍රමාණයක් එකම file ඇතුළෙන් export කරන්න ඕන නම් default use කරන්න්න බෑ.