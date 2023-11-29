import GoalkeeperRepository from "../domain/repositories/goalkeeper.repository";
import IGoalkeeperDto from "./dto/output/goalkeeper-dto.interface";

export default class GetAllGoalkeepeersUseCase {
    constructor(private readonly goalkeepersRepository: GoalkeeperRepository) {}

    async execute(): Promise<IGoalkeeperDto[]> {
        const goalkeepers = await this.goalkeepersRepository.getAll();
        
        return goalkeepers.map((goalkeeper) => ({
            id: goalkeeper.id,
            name: goalkeeper.name,
            position: goalkeeper.position,
            goalsConceded: goalkeeper.goalsConceded
        }));
    }
}