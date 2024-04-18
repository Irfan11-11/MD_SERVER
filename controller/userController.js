const users = require("../Models/userModel");
const jwt = require('jsonwebtoken')

//reegister
exports.register = async (req, res) => {
    console.log("Inside register req!!!");
    const { firstname, lastname, adress, gender, course, dob, mobile, email, password } = req.body
    console.log(firstname, lastname, adress, gender, course, dob, mobile, email, password);
    try {
        //check email is present?
        const existingUser = await users.findOne({ email })
        //if email is present then alert
        if (existingUser) {
            res.status(406).json("User already exists")
        } else {
            // else strore data to db
            const newUser = new users({
                firstname, lastname, adress, gender, course, dob, mobile, email, password
            })
            // to store data mongodb from mongoose model
            await newUser.save()
            res.status(200).json(newUser)
        }
    } catch (err) {
        res.status(401).json(err)

    }
}


//Login
exports.login = async (req, res) => {
    console.log("Inside login Function");
    const { email, password } = req.body
    console.log(email, password);
    try {
        const existingUser = await users.findOne({ email, password })
        if (existingUser) {
            const token = jwt.sign({ userId: existingUser._id }, process.env.JWT_SECRET)
            res.status(200).json({ existingUser, token })
        } else {
            res.status(404).json("Invalid Email / Password")
        }
    } catch (err) {
        res.status(401).json(err)
    }
}

