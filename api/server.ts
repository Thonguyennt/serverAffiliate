import express, { NextFunction, RequestHandler, Request, Response } from 'express';
import { TestController } from './controllers/testController/test';

const app:express.Application = express()

const port: number = process.env.PORT ? parseInt(process.env.PORT) : 3001;

/**
 * Configure controller route
 */
const testCtr: TestController = new TestController()
app.use(testCtr.ROUTER_PREFIX, testCtr.getRouter())

 app.listen(port, () =>{
     console.log(`Listening at http://localhost:${port}`)
 })
 

 module.exports = app;