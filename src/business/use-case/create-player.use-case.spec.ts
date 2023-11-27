import PlayerRepository from "../domain/repositories/player.repository";
import CreatePlayerUseCase, { CreatePlayerDto } from "./create-player.use-case"

const SUCCESS_CREATE_PLAYER_DTO: CreatePlayerDto = {
    id: 1,
    name: 'Romário',
    position: 'Forward'
}

describe('CreatePlayer - UseCase', () => {
    let createPlayerUseCase: CreatePlayerUseCase;
    let playerRepository: jest.Mocked<PlayerRepository>;

    beforeEach(() => {
        playerRepository = {
            save: jest.fn(),
            getAllPlayers: jest.fn(),
            getPlayerById: jest.fn()
        }

        createPlayerUseCase = new CreatePlayerUseCase(playerRepository);
    })

    it('Should create a player succesfully', async () => {
        playerRepository.save.mockResolvedValue();

        await expect(createPlayerUseCase.execute(SUCCESS_CREATE_PLAYER_DTO)).resolves.not.toThrowError();

        expect(playerRepository.save).toHaveBeenCalled();

    })
})