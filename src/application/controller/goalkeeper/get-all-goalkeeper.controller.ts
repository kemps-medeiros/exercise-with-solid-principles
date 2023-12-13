import { Request, Response } from "express";
import GetAllGoalkeepeersUseCase from "../../../business/use-case/goalkeeper/get-all-goalkeepeers.use-case";

export default class GetAllGoalkeeperController {
    constructor(private getAllGoalkeeperUseCase: GetAllGoalkeepeersUseCase) {
    }

    async getAllGoalkeeper(request: Request, response: Response) {
       
        try {
            const data = await this.getAllGoalkeeperUseCase.execute();
            response.status(200).json({data});
        } catch (error) {
            console.error(error);
            response.status(400).json({error});
        }
    }
}