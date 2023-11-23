import Player, { TPlayerPayload } from "./Player";

export default class Goalkeeper extends Player {
  private _goalsConceded: number;

  constructor(payload: TPlayerPayload) {
    super(payload);
    this._goalsConceded = 0;
  }

  public get goalsConceded(): number {
    return this._goalsConceded;
  }

  public updateGoalsConceded(goals: number): void {
    this._goalsConceded += goals;
  }
}