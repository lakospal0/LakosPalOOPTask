import { Vehicle } from "./Vehicle"

export class Bike extends Vehicle {
    protected max_weight: number;
    constructor(type: string, max_weight: number, marka: string) {
        super(type, marka)
        this.max_weight = max_weight;
    }
}