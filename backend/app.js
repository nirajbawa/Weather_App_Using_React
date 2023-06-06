require("dotenv").config();
const express = require("express");
const cors = require('cors');


// app setup
const app = express();
const port = process.env.PORT || 8000
app.use(express.json());

let orgins = process.env.origins.split(',')

console.log(orgins)

let corsOptions = {
    origin: orgins,
    optionsSuccessStatus: 200
  }

app.use(cors(corsOptions))

// middlewares
const apiKeyMiddleware = require("./middlewares/apiKeyMiddleware")
app.use(apiKeyMiddleware)

// routes
const api_weather_route = require("./routes/api.weather.route")
app.use("/api",api_weather_route)
app.use("*", (req, res)=>{
    res.status(404).send({"error":"404"})
})

app.listen(port, ()=>{
    console.log("http://localhost:"+port);
});