const express = require("express")
const api_weather = require("../controllers/api.weather.controllers")


const router = new express.Router()

const api_weather_obj = new api_weather()

router.post("/getWeather",  api_weather_obj.getWeather.bind(api_weather_obj))

module.exports = router