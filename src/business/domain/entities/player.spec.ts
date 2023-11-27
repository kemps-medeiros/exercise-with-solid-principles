import Player, { TPlayerPayload } from "./player";

describe("Player Class", () => {
  const playerPayload: TPlayerPayload = {
    id: 1,
    name: "Messi",
    position: "Forward",
  };

  it("should create a player instance", () => {
    const player = new Player(playerPayload);
    
    expect(player).toBeInstanceOf(Player);
  });

  it("should have the correct name and position", () => {
    const player = new Player(playerPayload);

    expect(player.id).toBe(playerPayload.id);
    expect(player.name).toBe(playerPayload.name);
    expect(player.position).toBe(playerPayload.position);
  });

});