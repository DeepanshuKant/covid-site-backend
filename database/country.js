const mongoose = require('mongoose');

const countrySchenma = mongoose.Schema(
    {
        Countries: [
            {
                ID: String,
                Country: String,
                CountryCode: String,
                Slug: String,
                NewConfirmed: Number,
                TotalConfirmed: Number,
                NewDeaths: Number,
                TotalDeaths: Number,
                NewRecovered: Number,
                TotalRecovered: Number,
            }
        ]
    }
)

const countryModel = mongoose.model('countries', countrySchenma)

module.exports = countryModel;