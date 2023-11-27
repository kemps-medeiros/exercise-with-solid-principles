import Goalkeeper from "../entities/goalkeeper";

export default abstract class GoalkeeperRepository {
    abstract save(player: Goalkeeper): void;

    abstract findGoalkeeperById(goalkeeperId: number): Goalkeeper;

}