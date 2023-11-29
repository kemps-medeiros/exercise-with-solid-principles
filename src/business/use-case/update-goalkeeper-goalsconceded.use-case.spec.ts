import Goalkeeper from "../domain/entities/goalkeeper";
import GoalkeeperRepository from "../domain/repositories/goalkeeper.repository";
import IUpdateGoalkeeperGoalsConceeded from "./dto/input/update-goalkeeper-goalsconceeded-dto";
import IGoalkeeperDto from "./dto/output/goalkeeper-dto.interface";
import UpdateGoalkeepeerGoalsConceededUseCase from "./update-goalkeeper-goalsconceded.use-case";

const SUCCESS_INPUT: IUpdateGoalkeeperGoalsConceeded = {
    goalkeeperId: 3,
    goalsConceeded: +5
}

const SUCCES_RETURN_FIND_GOALKEEPER: Goalkeeper = new Goalkeeper({
    id: 3,
    name: "rogerio",
    position: "Goalkeeper"
})

const SUCCESS_UPDATE_RESULT: IGoalkeeperDto = { 
    id: 3, 
    name: 'rogerio', 
    position: 'Goalkeeper', 
    goalsConceded: 5 
}


describe('Update Goalkeeper Goals Conceeded - UseCase', () => {
    let updateGoalkeeperGoalsConceededUsecase: UpdateGoalkeepeerGoalsConceededUseCase;
    let goalkeeperRepository: jest.Mocked<GoalkeeperRepository>;

    beforeEach(() => {
        goalkeeperRepository = {
            save: jest.fn(),
            findGoalkeeperById: jest.fn(),
            getAll: jest.fn()
        }

        updateGoalkeeperGoalsConceededUsecase = new UpdateGoalkeepeerGoalsConceededUseCase(goalkeeperRepository);
    })

    it('Should update goals conceeded succesfully', async () => {
        goalkeeperRepository.findGoalkeeperById.mockResolvedValue(SUCCES_RETURN_FIND_GOALKEEPER);

        const result = await updateGoalkeeperGoalsConceededUsecase.execute(SUCCESS_INPUT);

        expect(goalkeeperRepository.save).toHaveBeenCalled();

        expect(result).toEqual(SUCCESS_UPDATE_RESULT);
    })
})