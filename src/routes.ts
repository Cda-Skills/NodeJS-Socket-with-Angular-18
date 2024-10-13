import { Router } from "express";
import { Message } from "./message.controller";


export const routes = (router: Router)=> {
    router.post('/api/message', Message);
}

