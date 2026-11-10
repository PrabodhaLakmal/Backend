import Student from "../models/student.js"; //this is a model that represents the student collection in the MongoDB database. It is imported from the models folder.

//this is a controller that handles the logic for the student model. It is used to define the functions that will be called when the routes are accessed. 
// The functions are defined using the req and res parameters, which represent the incoming request and outgoing response, respectively.
export function getStudents(req, res){
    Student.find().then(
        (data) =>{
            res.json(data);
        }
    )
}

export function saveStudents(req, res) {

    console.log(req.body); //this is used to log the incoming request body to the console. It is useful for debugging purposes, as it allows us to see the data that is being sent to the server.

    // Create a new instance of the Student model using the data from the request body. The req.body object contains the data sent in the POST request, which is used to populate the fields of the new student document.
    const student = new Student({
        name: req.body.name,
        age: req.body.age,
        stream: req.body.stream,
        email: req.body.email
    });

    student.save().then(() => {
        res.json({
            message: "Student data saved successfully."
        });
    }).catch(() => {
        res.json({
            message: "Error saving student data."
        });
    });       
}    