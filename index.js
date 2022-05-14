
//Essential Packages Import
const mongoose = require('mongoose');
const express = require('express');
var cors = require('cors');

//Database Model Import
const globalModel = require('./database/global')
const countryModel = require('./database/country')

//MognoDb Connect
var mongoDB = 'mongodb+srv://CheeseMaster_69:seabirdkant1A@cluster0.5crnt.mongodb.net/CovidData?retryWrites=true&w=majority';
mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true }).then(() => console.log("CONNECTION ESTABLISHED"));

const app = express();
app.use(cors());
app.use(express.json())

//API Requests
app.get('/', (req, res) => {

    return res.json({ "Message": "Welcome to my backend" });
})

app.get("/cases/global", async (req, res) => {

    const getAllActive = await globalModel.findOne();
    // console.log(getAllActive.TotalConfirmed);
    return res.json(getAllActive)
})

app.get("/cases/country", async (req, res) => {
    const getAllCountry = await countryModel.findOne();

    return res.json(getAllCountry.Countries);

})

app.get("/cases/country/:country_name", async (req, res) => {

    const { country_name } = req.params;

    const getSingleCountry = await countryModel.findOne();
    // console.log(getSingleCountry.Countries)

    getSingleCountry.Countries.forEach(element => {
        if (element.Slug == country_name) {
            // console.log(element)
            return res.json(element);
        }
    });
})



app.listen(3001, () => {

    console.log("App is Running!!!")
})