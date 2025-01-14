import express from "express";
import { imageGen } from "../imageGeneration/index.js";

const router = express.Router()


router
.route("/")
.get(imageGen)




export default router