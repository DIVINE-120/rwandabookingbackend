// import { Route } from "express";
import { Router } from "express";
// import { route } from "express/lib/application";
import UserController from "../controllers/usercontroller";
const route =Router();
route.post("/user/test",UserController.testController);
export default route;