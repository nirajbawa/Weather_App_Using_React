import Home_item from './Home_Right_item'


export default function Home_Right(props) {

  let findCaseInsensitiveMatch = (arr, searchValue) => {
    const lowerSearchValue = searchValue.toLowerCase();
  return arr.some(item => item.toLowerCase() === lowerSearchValue) ? 'true' : 'false';
  }

  return (
    <div className="flex flex-col md:flex-row md:px-20 justify-center content-center flex-wrap w-full gap-x-5 md:gap-x-9 gap-y-8 md:gap-y-9 ">
      {

        props.WeatherData.map((value, index) => {
          console.log(props.props.stack)
          console.log(value.city)
          console.log()
          let result = findCaseInsensitiveMatch(props.props.stack, value.city)
          if ( result.toLowerCase() == "true") {
            return <Home_item name={value.city} temp={value.temp} humidity={value.humidity} Visibility={value.Visibility} windSpeed={value.windSpeed} img={value.img} key={index} />
          }

        })
      }
    </div>
  )
}
