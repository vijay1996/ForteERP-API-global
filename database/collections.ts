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

export const Currency = mongoose.model('currency', currencySchema);

export default {
    "currency": Currency
}