import Player from "../domain/entities/player";
import PlayerRepository from "../domain/repositories/player.repository";
import GetAllPlayersUseCase from "./get-all-players.use-case";

const SUCCESS_RETURN_PLAYERS: Player[] = 
[
    new Player({
        id: 1,
        name: 'romario',
        position: 'Forward'
    }),
    new Player({
        id: 2,
        name: 'rogerio',
        position: 'Goalkeeper'
    })
]

describe('Get All players - UseCase', () => {
    let getAllPlayersUseCase: GetAllPlayersUseCase;
    let playerRepository: jest.Mocked<PlayerRepository>;

    beforeEach(() => {
        playerRepository = {
            save: jest.fn(),
            getAllPlayers: jest.fn(),
            getPlayerById: jest.fn()
        }

        getAllPlayersUseCase = new GetAllPlayersUseCase(playerRepository);
    })

    it('Should get all players succesfully', async () => {
        playerRepository.getAllPlayers.mockResolvedValue(SUCCESS_RETURN_PLAYERS);

        const result = await getAllPlayersUseCase.execute();

        expect(playerRepository.getAllPlayers).toHaveBeenCalled();

        expect(result).toEqual([
            { id: 1, name: 'romario', position: 'Forward' },
            { id: 2, name: 'rogerio', position: 'Goalkeeper' }
          ])

    })
})