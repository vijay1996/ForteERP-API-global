import mongoose from 'mongoose';
import dotenv from 'dotenv';
import collections from './collections.js';

dotenv.config();
mongoose.connect(process.env.DB_URL as string).then(data => {
    console.log("Connected to the database successfully!");
}).catch(err => {
    console.log(err);
});

export async function DYNAMIC_SELECT (collection:string, filter:any) {
    console.log(`Attempting to fetch values for DYNAMIC_SELECT - \n${JSON.stringify(filter)}`);
    const fieldKey = Object.keys(filter)[0];
    const fieldvalue = filter[`${fieldKey}`];
    if (!fieldvalue) return [];
    const FILTER:any = {};
    fieldvalue && (FILTER[`${fieldKey}`] = new RegExp(fieldvalue, "i"))
    //@ts-ignore    
    return await collections[`${collection}`].find(FILTER, fieldKey);
}