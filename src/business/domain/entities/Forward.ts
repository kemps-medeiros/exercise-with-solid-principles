import Player, { TPlayerPayload } from "./Player";

export default class Forward extends Player {
    private _goalsScored: number;
  
    constructor(payload: TPlayerPayload) {
      super(payload);
      this._goalsScored = 0;
    }
  
    public get goalsScored(): number {
      return this._goalsScored;
    }
  
    public updateGoalsScored(goals: number): void {
      this._goalsScored += goals;
    }
}