
export default function Home_Right_Item_Down_Content(props) {
  return (
    <div className="flex flex-col gap-y-2 text-left justify-center grow md:grow-0 font-medium">            
                <p className="text-xl flex justify-between md:gap-5">{(props.props.temp - 273.15).toFixed(2)}°C<span className="font-semibold text-right text-xs relative bottom-2 md:bottom-1">{props.props.name}</span></p>
                <p>Visibility : {(props.props.Visibility/1000).toFixed(2)} km</p>
                <p>Humidity : {props.props.humidity} %</p>
                <p>Wind : {(props.props.windSpeed*3.6).toFixed(2)} km/h</p>
    </div>
  )
}
