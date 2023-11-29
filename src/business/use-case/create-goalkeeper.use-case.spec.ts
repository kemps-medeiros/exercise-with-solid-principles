import GoalkeeperRepository from "../domain/repositories/goalkeeper.repository";
import CreateGoalkeeperUseCase from "./create-goalkeeper.use-case";
import { CreatePlayerDto } from "./create-player.use-case";

const SUCCESS_CREATE_GOALKEEPER_DTO: CreatePlayerDto = {
    id: 1,
    name: 'Rogerio',
    position: 'Goalkeeper'
}

const NOT_SUCCESS_CREATE_GOALKEEPER_DTO: CreatePlayerDto = {
    id: 1,
    name: 'Romario',
    position: 'Atacante'
}

describe('Create Goalkeeper - UseCase', () => {
    let createGoalkeeperUseCase: CreateGoalkeeperUseCase;
    let goalkeeperRepository: jest.Mocked<GoalkeeperRepository>;

    beforeEach(() => {
        goalkeeperRepository = {
            save: jest.fn(),
            findGoalkeeperById: jest.fn(),
            getAll: jest.fn()
        }

        createGoalkeeperUseCase = new CreateGoalkeeperUseCase(goalkeeperRepository);
    })

    it('Should create a goalkeeper succesfully', async () => {
        goalkeeperRepository.save.mockResolvedValue();

        await expect(createGoalkeeperUseCase.execute(SUCCESS_CREATE_GOALKEEPER_DTO)).resolves.not.toThrowError();

        expect(goalkeeperRepository.save).toHaveBeenCalled();

    })

    it('Should not create a goalkeeper if his positions is not Goalkeeper', async () => {

        await expect(createGoalkeeperUseCase.execute(NOT_SUCCESS_CREATE_GOALKEEPER_DTO)).rejects.toThrowError();

        expect(goalkeeperRepository.save).not.toHaveBeenCalled();

    })
})