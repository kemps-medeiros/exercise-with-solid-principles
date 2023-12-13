import CreateGoalkeeperController from "./application/controller/goalkeeper/create-goalkeeper.controller";
import GetAllGoalkeeperController from "./application/controller/goalkeeper/get-all-goalkeeper.controller";
import CreateGoalkeeperUseCase from "./business/use-case/goalkeeper/create-goalkeeper.use-case";
import GetAllGoalkeepeersUseCase from "./business/use-case/goalkeeper/get-all-goalkeepeers.use-case";
import GoalkeeperRepositoryInMemory from "./infrastructure/persistence/repository-in-memory/goalkeeper-in-memory.repository";
import HttpServer from "./server/http-server";

const goalkeeperRepository = new GoalkeeperRepositoryInMemory()

const createGoalkeeperUseCase = new CreateGoalkeeperUseCase(goalkeeperRepository);
const getAllGoalkeeperUseCase = new GetAllGoalkeepeersUseCase(goalkeeperRepository);

const createGoalkeeperController = new CreateGoalkeeperController(createGoalkeeperUseCase);
const getAllGoalkeeperController = new GetAllGoalkeeperController(getAllGoalkeeperUseCase);

const httpServer = new HttpServer(createGoalkeeperController, getAllGoalkeeperController);

httpServer.start(3000);


