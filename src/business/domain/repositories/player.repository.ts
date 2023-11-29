import Player from "../entities/player";

export default abstract class PlayerRepository {
    abstract save(player: Player): Promise<void>;
    
    abstract getAllPlayers(): Promise<Player[]>;

    abstract getPlayerById(playerId: number): Promise<Player[]>;
}