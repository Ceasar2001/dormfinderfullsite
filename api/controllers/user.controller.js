import prisma from "../lib/prisma.js";

export const getUsers = async (req, res) => {
    try{
        const users = await prisma.user.findMany();
        res.status(200).json(users)
    }catch(err){
        console.log(err)
        res.status(500).json({
            message:"Failed to get user!"
        })
    }
}

export const getUser = async (req, res) => {
    const id = req.params.id;
    try{
        const user = await prisma.user.findUnique({
            where: { id }, // Use 'id' instead of '_id'
          });
        res.status(200).json(user)
    }catch(err){
        console.log(err)
        res.status(500).json({
            message:"Failed to get user!"
        })
    }
}

export const updateUser = async (req, res) => {
    try{

    }catch(err){
        console.log(err)
        res.status(500).json({
            message:"Failed to update user!"
        })
    }
}

export const deleteUser = async (req, res) => {
    try{

    }catch(err){
        console.log(err)
        res.status(500).json({
            message:"Failed to delete user!"
        })
    }
}