import Home_item from './Home_Right_item'
import { Player } from '@lottiefiles/react-lottie-player';
import { Spinner } from "@material-tailwind/react";


export default function Home_Right(props) {

  let findCaseInsensitiveMatch = (arr, searchValue) => {
    const lowerSearchValue = searchValue.toLowerCase();
    return arr.some(item => item.toLowerCase() === lowerSearchValue) ? 'true' : 'false';
  }


  return (

    <>
      <div className="flex flex-col h-full md:flex-row md:px-20 justify-center content-center flex-wrap w-full gap-x-5 md:gap-x-9 gap-y-8 md:gap-y-9 ">
        {(props.WeatherData.length == 0 || props.props.stack.length == 0) && <div ><Player
          src='https://assets9.lottiefiles.com/packages/lf20_t24tpvcu.json'
          className="player h-80"
          loop
          autoplay
        /></div>
        }
        {
          props.WeatherData.map((value, index) => {

            let result = findCaseInsensitiveMatch(props.props.stack, value.city)
            if (result.toLowerCase() == "true") {
              return <Home_item name={value.city} temp={value.temp} humidity={value.humidity} Visibility={value.visibility} windSpeed={value.windspeed} img={value.img} key={index} />
            }
          })
        }
        {props.fetchStatus && <div className="w-full"> <div className=" h-10 md:h-16 flex justify-center items-center content-center"><Spinner className="  w-20 h-full" /> </div> </div> }

      </div>
    </>
  )
}
