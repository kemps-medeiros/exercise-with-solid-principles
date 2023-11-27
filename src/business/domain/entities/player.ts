export type TPlayerPayload = {
    id: number;
    name: string;
    position: string;
}

export default class Player {
    private _id: number;
    private _name: string;
    private _position: string;



    constructor(payload: TPlayerPayload) {
        this._id = payload.id;
        this._name = payload.name;
        this._position = payload.position;
    }

    public get id(): number {
        return this._id;
    }

    public get name(): string {
        return this._name;
    }

    public get position(): string {
        return this._position;
    }
}