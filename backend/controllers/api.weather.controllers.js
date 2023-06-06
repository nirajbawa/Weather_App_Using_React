const axios = require("axios");

class api_weather{
    async getWeather(req, res){
        try{
            let params = req.body
            console.log()
            if(params.cities && params.cities.length != 0)
            {
                let cities = params.cities
                if(cities.length <= 5)
                {
                    let data = []

                    // fetching weather data of cities
                    for(let i = 0; i<cities.length; i++)
                    {
                        let temp = await this.fetchData(cities[i])
                        data[i] = temp
                    }

                    res.status(200).send({"data":data})
                }
                else{
                    res.status(202).send({"error":"Please Make Sure Length Of Array Is Less Than Five"})
                }
            }
            else{
                res.status(400).send()
            }
        }
        catch(e)
        {
            console.log(e)
            res.status(500).send({"error":"Please Make Sure Your City Names Are Correct"})
        }
        
    }
    async fetchData(cities)
    {
        
            let response = await axios(`https://api.openweathermap.org/data/2.5/weather?q=${cities}&appid=${process.env.WEATHER_API_KEY}`);
            let data = response.data
            console.log(data)
            return {"city":data.name, "img":data.weather[0].icon, "temp":data.main.temp, "visibility":data.visibility, "humidity":data.main.humidity, "windspeed":data.wind.speed} 
    }
}

module.exports = api_weather