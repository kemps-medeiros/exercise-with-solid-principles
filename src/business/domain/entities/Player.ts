export type TPlayerPayload = {
    name: string;
    position: string;
}

export default class Player {
    private _name: string;
    private _position: string;



    constructor(payload: TPlayerPayload) {
        this._name = payload.name;
        this._position = payload.position;
    }

    public get name(): string {
        return this._name;
    }

    public get position(): string {
        return this._position;
    }
}