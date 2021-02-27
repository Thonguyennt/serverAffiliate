import { format } from "path";
import {Router} from "express";

export class BaseController{
    router: Router;

    constructor(){
      this.router = Router({mergeParams: true})
    }

    getRouter(): Router{
        return this.router
    }
}