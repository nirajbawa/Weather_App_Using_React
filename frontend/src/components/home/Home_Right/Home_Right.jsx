import Home_item from './Home_Right_item'


export default function Home_Right(props) {

  return (
    <div className="flex flex-col md:flex-row md:px-20 justify-center content-center flex-wrap w-full gap-x-5 md:gap-x-9 md:gap-y-9 ">
      {
        props.WeatherData.map((value, index) => {

          if(props.props.stack.includes(value.city.toLowerCase()))
          {
            return <Home_item name={value.city} temp={value.temp} humidity={value.humidity} Visibility={value.Visibility} windSpeed={value.windSpeed} img={value.img} key={index} />
          }
        })
      }
    </div>
  )
}
