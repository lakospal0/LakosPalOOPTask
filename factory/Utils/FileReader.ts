const fs = require('fs');

export class DataReader {

    static readAllFiles(dir) {
        const files = fs.readdirSync(dir);
        let jsonResponse = []

        files.forEach(element => {
            const elementPath = `${dir}/${element}`

            if (fs.lstatSync(elementPath).isDirectory()) {
                if (jsonResponse) {
                    jsonResponse.push(DataReader.readAllFiles(elementPath))
                } else {
                    jsonResponse = DataReader.getFiles(elementPath)
                }
            } else {
                if (jsonResponse) {
                    jsonResponse.push(JSON.parse(fs.readFileSync(elementPath)))
                }
            }
        })

        return jsonResponse
    }

    static getFiles(dir) {
        const filesRead = DataReader.readAllFiles(dir)
        const respArray = []

        filesRead.forEach(element => {
            if (element.constructor === Array) {
                element.forEach(subElement => {
                    respArray.push(subElement)
                })
            } else {
                respArray.push(element)
            }
        })

        return respArray
    }
}