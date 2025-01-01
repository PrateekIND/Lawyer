const bcrypt = require('bcryptjs');
const jwt =require("jsonwebtoken");
const User = require("../models/User")

const register = async (req, res) =>{
    try {
        const {name, email, password, role} = req.body;
        const hashedpassword = await bcrypt.hash(password, 10)

        const newUser = new User({name, email, password: hashedpassword, role});
        await newUser.save();
        res.status(201).json({"message": "User registered"})

    } catch (error) {
        res.status(500).json({"message":"An error occured while creating the user"})
    }
    
}

const login = async (req, res) =>{
    try {
        const {email, password} =req.body;
        console.log(email)
        const user = await User.findOne({email});
        if(!user) return res.status(404).json({"messaeg":"User not found"});
        const isMatched = await bcrypt.compare(password, user.password)
        if(!isMatched) return res.status(401).json({"message":"Invalid Creadentials"});

        const token = jwt.sign(
            {id:user._id, role:user.role},
            process.env.JWT_SECRET,
            {expiresIn: '30d'}
        );
        res.status(200).json(token);
    } catch (error) {
        res.status(500).json({"message":"An error occured"})
    }

}

module.exports = {login, register}