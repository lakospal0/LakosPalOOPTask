export class Vehicle {
    protected _type: string;
    protected _marka: string;

    constructor(type: string, marka: string) {
        this._type = type;
        this._marka = marka;
    }
}