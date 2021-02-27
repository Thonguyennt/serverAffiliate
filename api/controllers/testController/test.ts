import { Router } from "express";
import asyncHandler from 'express-async-handler'
import { BaseController } from "../../base.controller";


export class TestController extends BaseController{

   ROUTER_PREFIX: string = "/app";

   getRouter(): Router{

    this.router.post('/abc', asyncHandler(async(req, res, next) =>{
        res.status(200).send('thoNguyen')
    } ));

    this.router.get('/tho', asyncHandler(async(req, res, next)=>{
      res.status(200).send('tho pro 00 thay')
    }));

       return this.router;
   }
   
}