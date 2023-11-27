import Goalkeeper from "./goalkeeper";

describe("Goalkeeper Class", () => {
    const goalkeeperPayload = {
      id: 2,
      name: "Rogerio Ceni",
      position: "Goalkeeper",
    };
  
    it("should create a goalkeeper instance", () => {
      const goalkeeper = new Goalkeeper(goalkeeperPayload);
      
      expect(goalkeeper).toBeInstanceOf(Goalkeeper);
    });
  
    it("should have the correct name, position, and initial goals conceded", () => {
      const goalkeeper = new Goalkeeper(goalkeeperPayload);

      expect(goalkeeper.id).toBe(goalkeeperPayload.id);
      expect(goalkeeper.name).toBe(goalkeeperPayload.name);
      expect(goalkeeper.position).toBe(goalkeeperPayload.position);
      expect(goalkeeper.goalsConceded).toBe(0);
    });
  
    it("should update goals conceded correctly", () => {
      const goalkeeper = new Goalkeeper(goalkeeperPayload);
  
      goalkeeper.updateGoalsConceded(2);
      expect(goalkeeper.goalsConceded).toBe(2);
  
      goalkeeper.updateGoalsConceded(-1);
      expect(goalkeeper.goalsConceded).toBe(1);
  
      goalkeeper.updateGoalsConceded(0);
      expect(goalkeeper.goalsConceded).toBe(1);
    });
  });