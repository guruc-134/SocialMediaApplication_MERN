import express from "express";
import { getPosts,createPost,updatePost } from "../controllers/posts.js";


const router = express.Router()


// all the routes will have /posts prefix
router.get("/",getPosts)
router.post("/",createPost)
router.patch("/:id",updatePost)
export default router