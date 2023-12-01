import PlayerRepository from "../../domain/repositories/player.repository";
import IPlayerDto from "../dto/output/player-dto.interface";



export default class GetAllPlayersUseCase {
    constructor(private readonly playerRepository: PlayerRepository) {}

    async execute(): Promise<IPlayerDto[]> {
        const players = await this.playerRepository.getAllPlayers();
        
        return players.map((player) => ({
            id: player.id,
            name: player.name,
            position: player.position
        }));
    }
}