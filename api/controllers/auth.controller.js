import bcryptjs from "bcryptjs";
import prisma from "../lib/prisma.js";
import jwt from "jsonwebtoken";

export const register = async (req, res) => {
    const {username, email, password} = req.body;

    // if (!['houseowner', 'user'].includes(role)) {
    //     return res.status(400).json({ message: "Invalid role" });
    //   }

    try{
    //HASH the password
    const hashedPassword = await bcryptjs.hash(password, 10);

    console.log(hashedPassword)
    //CREATE a new user and save to DB
    // Create the user with the role
    const newUser = await prisma.user.create({
        data: {
          username,
          email,
          password: hashedPassword,
          
        },
      });

    res.status(201).json({message: "User created Successfully"});
    }catch(err){
        console.log(err);
        res.status(500).json({message: "Failed to create User"});
    }
};

export const verifyRole = (role) => {
    return (req, res, next) => {
      const token = req.cookies.token;
  
      if (!token) {
        return res.status(401).json({ message: "Unauthorized" });
      }
  
      jwt.verify(token, process.env.JWT_SECRET_KEY, (err, payload) => {
        if (err) {
          return res.status(403).json({ message: "Forbidden" });
        }
  
        if (payload.role !== role) {
          return res.status(403).json({ message: `Access restricted to ${role}s only` });
        }
  
        req.userId = payload.id;
        next();
      });
    };
  };
  

export const login = async (req, res) => {
    const {username, password} = req.body;

    try {
        
    //check if user is on database
    const user = await prisma.user.findUnique({
        where:{username:username}
    })

    if(!user) return res.status(401).json({message: "Invalid Credentials!"});

    //if user is in database check if password is correct
    const isPasswordValid = await bcryptjs.compare(password, user.password);

    if(!isPasswordValid) return res.status(401).json({message: "Invalid Credentials!"});

    //THEN AFTER THAT GENERATE A COOKIE AND SEND TO USER
    const age = 1000 * 60 * 60 * 24 * 7;

    const token = jwt.sign({
        id:user.id,
        isAdmin: false,
    },
        process.env.JWT_SECRET_KEY, {expiresIn: age}
    );

    const {password:userPassword, ...userInfo} = user

    res.cookie("token", token, {
        httpOnly: true,
    //basta production na e uncomment
       //secure: true,
       maxAge: age
    })
        .status(200)
        .json(userInfo);

    } catch (error) {
        console.log(err);
        res.status(500).json({message: "Failed to Login!"});
    }

}

export const logout = (req, res) => {
    res.clearCookie("token").status(200).json({
        message: "Logout Successfully"
    });
};