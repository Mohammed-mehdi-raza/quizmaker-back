import express from "express";
import { user,callback,isLoggedIn,success,failure,logout,addTest} from "../controllers/controller.js";

const Router=express.Router();

Router.get('/auth/google',user);
Router.get('/google/callback',callback);
Router.get('/success',isLoggedIn,success);
Router.get('/failure',failure);
Router.get('/logout',logout);
Router.post('/addTest',addTest);

export default Router;