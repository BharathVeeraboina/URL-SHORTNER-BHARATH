import { Router } from "express";
import { loggedInUser } from "../middlewares/authMiddleware.js";
import { generateShortUrl, redirectUrl } from "../controllers/shortUrlController.js";


const shortURLRouter = Router();


shortURLRouter.post("", loggedInUser, generateShortUrl)
shortURLRouter.get("/:shorturl", redirectUrl);






export default shortURLRouter;