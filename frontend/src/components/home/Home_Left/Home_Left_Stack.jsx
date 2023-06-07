import Home_Left_Stack_Item from './Home_Left_Stack_Item'

export default function Home_Left_Stack(props) {




    return (
        <ul className="flex flex-col w-full lg:w-80 h-[30rem] justify-end items-center text-center gap-2 rounded-md bg-[#f7f9fa] dark:border-2 dark:border-white dark:bg-[#1e293b] dark:text-white py-5 px-5 text-lg font-[Inter,sans-serif] capitalize font-semibold">
           
            {props.props.stack.map((value, index)=>{
                return <Home_Left_Stack_Item name= {value} key={index} i={index} props={props.props} />
            })}


        </ul>
    )
}
