import Goalkeeper from "../../../business/domain/entities/goalkeeper";
import GoalkeeperRepositoryInMemory from "./goalkeeper-in-memory.repository";

describe("GoalkeeperRepositoryInMemory", () => {
  let goalkeeperRepository: GoalkeeperRepositoryInMemory;

  beforeEach(() => {
    goalkeeperRepository = new GoalkeeperRepositoryInMemory();
  });

  it("should save a new goalkeeper", async () => {
    const newGoalkeeper = new Goalkeeper({
      id: 1,
      name: "rogerio",
      position: "Goalkeeper",
    });

    await goalkeeperRepository.save(newGoalkeeper);

    const savedGoalkeeper = await goalkeeperRepository.findGoalkeeperById(1);
    
    expect(savedGoalkeeper).toEqual(newGoalkeeper);
  });

  it("should update an existing goalkeeper", async () => {
    const existingGoalkeeper = new Goalkeeper({
      id: 12,
      name: "marcos",
      position: "Goalkeeper",
    });

    await goalkeeperRepository.save(existingGoalkeeper);

    existingGoalkeeper.updateGoalsConceded(5);
    
    await goalkeeperRepository.save(existingGoalkeeper);

    const updatedGoalkeeper = await goalkeeperRepository.findGoalkeeperById(12);

    expect(updatedGoalkeeper.goalsConceded).toBe(5);
  });

  it("should return all goalkeeper", async () => {
    const goalKeeperOne = new Goalkeeper({
      id: 1,
      name: "rogerio",
      position: "Goalkeeper",
    })

    const goalKeeperTwo = new Goalkeeper({
      id: 12,
      name: "marcos",
      position: "Goalkeeper",
    })

    await goalkeeperRepository.save(goalKeeperOne);

    await goalkeeperRepository.save(goalKeeperTwo);

    const result = await goalkeeperRepository.getAll();

    expect(result).toContainEqual(goalKeeperOne);
    expect(result).toContainEqual(goalKeeperTwo);
  })
});
