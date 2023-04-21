const fs = require('fs');
const path = require('path');
const csvToJson = require('csvtojson');

const csvFilePath = path.join(__dirname, 'data.csv');
const jsonFilePath = path.join(__dirname, 'data.json');

csvToJson()
    .fromFile(csvFilePath)
    .then((products) => {
        fs.writeFile(jsonFilePath, JSON.stringify(products, null, 2), (err) => {
            if (err) {
                console.error(err);
            } else {
                console.log(`Successfully converted ${csvFilePath} to ${jsonFilePath}.`);
            }
        });
    })
    .catch((err) => {
        console.error(err);
    });