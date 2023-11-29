import Goalkeeper from "../domain/entities/goalkeeper";
import GoalkeeperRepository from "../domain/repositories/goalkeeper.repository";
import { CreatePlayerDto } from "./create-player.use-case";

export default class CreateGoalkeeperUseCase {
    constructor(private readonly goalkeeperRepository: GoalkeeperRepository) {}

    async execute(input: CreatePlayerDto): Promise<void> {
        if(input.position !== "Goalkeeper") {
            throw new Error("To create a Goalkeeper, position must be 'Goalkeeper'");
        }

        const goalkeeper = new Goalkeeper(input);

        await this.goalkeeperRepository.save(goalkeeper);
    }
}