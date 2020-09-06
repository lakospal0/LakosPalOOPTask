import { Vehicle } from "./Vehicle"

export class Car extends Vehicle {
    protected door_numbers: number;

    constructor(type: string, door_numbers: number, marka: string) {
        super(type, marka)
        this.door_numbers = door_numbers
    }
}
