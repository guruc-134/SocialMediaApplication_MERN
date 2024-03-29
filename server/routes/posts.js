import express from "express";
import { getPosts,createPost,updatePost,deletePost } from "../controllers/posts.js";


const router = express.Router()


// all the routes will have /posts prefix
router.get("/",getPosts)
router.post("/",createPost)
router.patch("/:id",updatePost)
router.delete("/:id",deletePost)
export default router