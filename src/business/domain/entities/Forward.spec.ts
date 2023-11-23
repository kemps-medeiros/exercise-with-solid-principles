import Forward from "./Forward";

describe("Forward Class", () => {
    const forwardPayload = {
      name: "Neymar",
      position: "Forward",
    };
  
    it("should create a forward instance", () => {
      const forward = new Forward(forwardPayload);

      expect(forward).toBeInstanceOf(Forward);
    });
  
    it("should have the correct name, position, and initial goals scored", () => {
      const forward = new Forward(forwardPayload);
      
      expect(forward.name).toBe(forwardPayload.name);
      expect(forward.position).toBe(forwardPayload.position);
      expect(forward.goalsScored).toBe(0);
    });
  
    it("should update goals scored correctly", () => {
      const forward = new Forward(forwardPayload);
  
      forward.updateGoalsScored(3);
      expect(forward.goalsScored).toBe(3);
  
      forward.updateGoalsScored(-1);
      expect(forward.goalsScored).toBe(2);
  
      forward.updateGoalsScored(0);
      expect(forward.goalsScored).toBe(2);
    });
  });