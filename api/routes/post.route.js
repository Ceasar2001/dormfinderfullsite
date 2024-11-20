import express from "express";
import {verifyToken} from "../middleware/verifyToken.js"
import { addPost, deletePost, getPost, getPosts, updatePost } from "../controllers/post.controller.js";
import { verifyRole } from "../controllers/auth.controller.js";

const router = express.Router();

router.get("/", getPosts)
router.get("/:id", getPost)
router.post("/", verifyToken, addPost)
router.put("/:id", verifyToken, updatePost)
router.delete("/:id", verifyToken, deletePost)

router.post("/posts", verifyRole("houseowner"), addPost);


export default router;