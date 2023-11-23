import Player, { TPlayerPayload } from "./Player";

describe("Player Class", () => {
  const playerPayload: TPlayerPayload = {
    name: "Messi",
    position: "Forward",
  };

  it("should create a player instance", () => {
    const player = new Player(playerPayload);
    
    expect(player).toBeInstanceOf(Player);
  });

  it("should have the correct name and position", () => {
    const player = new Player(playerPayload);

    expect(player.name).toBe(playerPayload.name);
    expect(player.position).toBe(playerPayload.position);
  });

});