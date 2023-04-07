// read data from json file
// read file base on environment
import * as fs from 'fs';


export function readJsonToMigrate(){
    let rawdata = fs.readFileSync('test.json');
    let data = JSON.parse(rawdata.toString());
    return data;
}

// do not import if table has data. for only once migration
// save to db