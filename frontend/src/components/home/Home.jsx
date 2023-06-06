import Home_Right from './Home_Right/Home_Right'
import Home_Left from './Home_Left/Home_Left'
import axios from 'axios'
import { useEffect, useState } from 'react'

export default function Home(props) {

    const [WeatherData, setWeatherData] = useState([])


    let fetchData =  () => {
        if (navigator.onLine) {    
            if(props.stack.length > 0)
            {
                axios.post(import.meta.env.VITE_WEATHER_API_URL,
                    {
                        "cities": props.stack
                    },
                    {
                        headers: {
                            "Content-Type": "application/json",
                            "api-key": import.meta.env.VITE_WEATHER_API_KEY
                        }
                    }
                )
                .then((response)=>{
                    console.log(response.data.data)
                    setWeatherData(response.data.data)
                })
                .catch((e)=>{
                    props.setAlert(e.response.data.error)
                })
            }
            else{
                props.setAlert("Please enter city name")
            }
        } else {
            props.setAlert("You are offline check your connection");
          }
    }



    return (
        <div className="flex w-full h-full justify-between px-5 lg:px-28 gap-y-12 flex-col md:flex-row py-7 dark:bg-[#0f172a] ">

            <Home_Left props={props} fetchData={fetchData} />
            <Home_Right WeatherData={WeatherData} props={props} />

        </div>
    )
}


