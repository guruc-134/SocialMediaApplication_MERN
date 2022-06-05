import express from "express";
import { getPosts,createPost } from "../controllers/posts.js";


const router = express.Router()


// all the routes will have /posts prefix
router.get("/",getPosts)
router.post("/",createPost)

export default router