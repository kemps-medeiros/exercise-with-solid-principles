import GoalkeeperRepository from "../domain/repositories/goalkeeper.repository";
import IUpdateGoalkeeperGoalsConceeded from "./dto/input/update-goalkeeper-goalsconceeded-dto";
import IGoalkeeperDto from "./dto/output/goalkeeper-dto.interface";

export default class UpdateGoalkeepeerGoalsConceededUseCase {
    constructor(private readonly goalkeepersRepository: GoalkeeperRepository) {}

    async execute(input: IUpdateGoalkeeperGoalsConceeded): Promise<IGoalkeeperDto> {
        const goalkeeper = await this.goalkeepersRepository.findGoalkeeperById(input.goalkeeperId);

        if (!goalkeeper) {
            throw new Error('Goalkeeper not found for update');
        }
        
        await goalkeeper.updateGoalsConceded(input.goalsConceeded);

        await this.goalkeepersRepository.save(goalkeeper);
        
        return {
            id: goalkeeper.id,
            name: goalkeeper.name,
            position: goalkeeper.position,
            goalsConceded: goalkeeper.goalsConceded
        };
    }
}