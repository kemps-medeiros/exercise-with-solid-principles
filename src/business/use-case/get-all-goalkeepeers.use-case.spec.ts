import Goalkeeper from "../domain/entities/goalkeeper";
import GoalkeeperRepository from "../domain/repositories/goalkeeper.repository";
import GetAllGoalkeepeersUseCase from "./get-all-goalkeepeers.use-case";


const SUCCESS_RETURN_GOALKEEPERS: Goalkeeper[] = 
[
    new Goalkeeper({
        id: 1,
        name: 'rogerio',
        position: 'Goalkeeper'
    }),
    new Goalkeeper({
        id: 12,
        name: 'marcos',
        position: 'Goalkeeper'
    })
]

describe('Get All Goalkeepers - UseCase', () => {
    let getAllGoalkeepersUseCase: GetAllGoalkeepeersUseCase;
    let goalkeeperRepository: jest.Mocked<GoalkeeperRepository>;

    beforeEach(() => {
        goalkeeperRepository = {
            save: jest.fn(),
            findGoalkeeperById: jest.fn(),
            getAll: jest.fn()
        }

        getAllGoalkeepersUseCase = new GetAllGoalkeepeersUseCase(goalkeeperRepository);
    })

    it('Should get all goalkeepers succesfully', async () => {
        goalkeeperRepository.getAll.mockResolvedValue(SUCCESS_RETURN_GOALKEEPERS);

        const result = await getAllGoalkeepersUseCase.execute();

        expect(goalkeeperRepository.getAll).toHaveBeenCalled();

        expect(result).toEqual( [
            { id: 1, name: 'rogerio', position: 'Goalkeeper', goalsConceded: 0 },
            { id: 12, name: 'marcos', position: 'Goalkeeper', goalsConceded: 0 }
          ])

    })
})