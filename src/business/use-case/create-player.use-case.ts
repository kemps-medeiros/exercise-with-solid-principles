import Player from "../domain/entities/player";
import PlayerRepository from "../domain/repositories/player.repository";

export type CreatePlayerDto = {
    id: number;
    name: string;
    position: string;
}

export default class CreatePlayerUseCase {
    constructor(private readonly playerRepository: PlayerRepository) {}

    async execute(input: CreatePlayerDto): Promise<void> {
        const player = new Player(input);

        await this.playerRepository.save(player);
    }
}