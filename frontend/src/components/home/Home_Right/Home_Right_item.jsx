import Home_Right_item_down_Conetent from './Home_Right_Item_Down_Content'
import Home_Right_Item_Up_Content from './Home_Right_Item_Up_Content'

export default function Home_Right_item(props) {
    return (
        <div className=" flex w-full h-40 md:w-80 px-4 gap-5 md:gap-1 py-5 justify-between items-center md:px-5 bg-[#f7f9fa] dark:bg-[#1e293b] dark:text-white text-xs font-[Inter,sans-serif] capitalize rounded-md ">
            <Home_Right_Item_Up_Content img={props.img}/>
            <Home_Right_item_down_Conetent props={props}/>
        </div>
    )
}
