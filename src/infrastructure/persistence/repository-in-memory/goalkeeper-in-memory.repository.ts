import Goalkeeper from "../../../business/domain/entities/goalkeeper";
import GoalkeeperRepository from "../../../business/domain/repositories/goalkeeper.repository";

export default class GoalkeeperRepositoryInMemory extends GoalkeeperRepository {
    private goalkeepers: Goalkeeper[] = []

    async save(player: Goalkeeper): Promise<void> {
        const existingIndex = this.goalkeepers.findIndex((p) => p.id === player.id);
        
        if(existingIndex !== -1) {
            this.goalkeepers[existingIndex] = player;
        } else {
            this.goalkeepers.push(player);
        }
    }

    async findGoalkeeperById(goalkeeperId: number): Promise<Goalkeeper> {
        const goalkeeper = this.goalkeepers.find((player) => player.id === goalkeeperId);

        if (!goalkeeper) {
            throw new Error("Goalkeeper Not Found");
        }

        return goalkeeper;
    }

    async getAll(): Promise<Goalkeeper[]> {
        return this.goalkeepers;
    }
    
}