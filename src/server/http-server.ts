import express, { Application } from "express";
import CreateGoalkeeperController from "../application/controller/goalkeeper/create-goalkeeper.controller";
import GetAllGoalkeeperController from "../application/controller/goalkeeper/get-all-goalkeeper.controller";

export default class HttpServer {
    private app: Application;

    constructor(
        private createGoalkeeperController: CreateGoalkeeperController,
        private getAllGoalkeeperController: GetAllGoalkeeperController
    ) {
        this.app = express();
        this.app.use(express.json());

        this.setupRoutes();
    }

    private setupRoutes() {
        this.app.post("/goalkeepers", this.createGoalkeeperController.createGoalkeeper.bind(this.createGoalkeeperController))
        this.app.get("/goalkeepers", this.getAllGoalkeeperController.getAllGoalkeeper.bind(this.getAllGoalkeeperController))
    }

    start(port: number): void {
        this.app.listen(port, () => {
          console.log(`Server is running on port ${port}`);
          console.log(`testandooo`);
        });
      }

}