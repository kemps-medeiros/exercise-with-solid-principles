import { Request, Response } from "express";
import CreateGoalkeeperUseCase from "../../../business/use-case/goalkeeper/create-goalkeeper.use-case";

export default class CreateGoalkeeperController {
    constructor(private createGoalkeeperUseCase: CreateGoalkeeperUseCase) {}

    async createGoalkeeper(request: Request, response: Response) {
        const {id, name, position} = request.body;
        try {
            await this.createGoalkeeperUseCase.execute({id, name, position});
            response.status(200).send();
        } catch (error) {
            console.error(error);
            response.status(400).json({error});
        }
    }
}