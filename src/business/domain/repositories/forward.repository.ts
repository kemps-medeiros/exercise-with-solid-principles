import Forward from "../entities/forward";

export default abstract class ForwardRepository {
    abstract save(player: Forward): void;

    abstract findForwardById(forwardId: number): Forward;

}