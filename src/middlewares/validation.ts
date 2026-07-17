import { request, Response ,NextFunction } from "express";

import { ZodSchema,ZodError } from "zod/v3";

export const validationBody = (schema:ZodSchema)=>{
    return( req:Request, res:Response, next:NextFunction) =>{
        try {
            
        } catch (error) {
            
        }
    }
}