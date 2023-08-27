import mongoose from "mongoose";

const currencySchema = new mongoose.Schema({
    symbol: {type: String, unique: false, required: true},
    name: {type: String, unique: true, required: true},
    symbol_native: {type: String, unique: false, required: true},
    decimal_digits: {type: Number, unique: false, required: true},
    rounding: {type: Number, unique: false, required: true},
    code: {type: String, unique: false, required: true},
    name_plural: {type: String, unique: false, required: true}
});

const generalData = new mongoose.Schema({
    record: {type: String, unique: true, required: true},
    category: {type: String, unique: true, required: true},
    code: {type: String, unique: true, required: false}
})

export const Currency = mongoose.model('currency', currencySchema);
export const GeneralData = mongoose.model('generalData', generalData);

export default {
    "currency": Currency,
    "generalData": GeneralData
}