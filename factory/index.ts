'use strict';

import { DataReader } from "./Utils/FileReader"
import { Car } from "./Model/Car"
import { Bike } from "./Model/Bike"

class App {
    private dataresult
    private listToReturn: any[]

    constructor() {
        console.log("The app is running!")
        this.listToReturn = []
    }

    handleData() {
        console.log('Reading from the files...')
        this.dataresult = DataReader.getFiles('data');

        this.dataresult.forEach(dataElement => {
            this.instantiateObject(dataElement)
        });

        return this.listToReturn
    }

    instantiateObject(dataElement) {
        switch (dataElement.type) {
            case "auto":
                let carToPush = new Car(dataElement.type, dataElement.ajtok_szama, dataElement.marka)
                this.listToReturn.push(carToPush)
                break;
            case "bicikli":
                let bikeToPush = new Bike(dataElement.type, dataElement.terhelhetoseg, dataElement.marka)
                this.listToReturn.push(bikeToPush)
                break;
            default:
                console.log("Error - unkown type")
                break;
        }
    }
}

const newApp = new App()

let list = newApp.handleData()

console.log("The processed data in list:")
console.log(list)