const mongoose = require('mongoose');

const globalSchema = mongoose.Schema(
    {
        NewConfirmed: Number,
        TotalConfirmed: Number,
        NewDeaths: Number,
        TotalDeaths: Number,
        NewRecovered: Number,
        TotalRecovered: Number,
        Date: String,
    }
)

const globalModel = mongoose.model("globals", globalSchema);

module.exports = globalModel;