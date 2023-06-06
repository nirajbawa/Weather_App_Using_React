
export default function Home_Right_Item_Up_Content(props) {
    return (
        <div className="flex justify-center items-center grow ">
            <img src={`https://openweathermap.org/img/wn/${props.img}@2x.png`} className="h-16" />
        </div>
    )
}
