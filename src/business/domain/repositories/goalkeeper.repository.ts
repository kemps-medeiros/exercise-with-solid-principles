import Goalkeeper from "../entities/goalkeeper";

export default abstract class GoalkeeperRepository {
    abstract save(player: Goalkeeper): Promise<void>;

    abstract findGoalkeeperById(goalkeeperId: number): Promise<Goalkeeper>;

    abstract getAll(): Promise<Goalkeeper[]>;

}