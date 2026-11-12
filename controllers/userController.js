import User from "../models/user.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export function createUser(req, res){

    const hashedPassword = bcrypt.hashSync(req.body.password + "qwerty", 10);

    const user = new User({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: hashedPassword,
        role: req.body.role,
        isBlocked: req.body.isBlocked,
        img: req.body.img
    });
    user.save().then(
        ()=>{
            res.json({
                message: "User created successfully"
            })
        }
    ).catch(
        ()=>{
            res.json({
                message: "Error creating user"
            })
        }
    )
}

export function loginUser(req, res){    
    const email = req.body.email;
    const password = req.body.password + "qwerty";

    User.findOne({email: email}).then(
        (user)=>{
            console.log(user);
            if(user == null){
                res.status(404).json({
                    message: "User not found"
                })
            }else{
                const isPasswordCorrect = bcrypt.compareSync(password, user.password)
                if(isPasswordCorrect){
                    const token = jwt.sign({
                        email : user.email,
                        firstName : user.firstName,
                        lastName : user.lastName,
                        role : user.role,
                        img : user.img
                    },
                    "cbc-batch-five#@2025"
                )

                    res.json({
                        message: "Login successful",
                        token : token
                    })
                }else{
                    res.status(401).json({
                        message: "Incorrect password"
                    })
                }
            }
        }
    )

}