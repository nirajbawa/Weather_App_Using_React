import LocationSearchingOutlinedIcon from '@mui/icons-material/LocationSearchingOutlined';
import { Button } from "@material-tailwind/react";


export default function Nav_Search(props) {
    

    return (
            <div className="flex justify-center gap-4 w-full flex-wrap lg:w-1/4 mt-6 xl:w-1/3">
                <input className="w-3/4  rounded-md h-14  bg-[#f7f9fa] dark:bg-[#1e293b] dark:text-white capitalize tracking-wide px-7 text-base py-3 text-[#0f172af9] font-[Inter,sans-serif] grow " value={props.props.city} onChange={e=>props.props.setcity(e.target.value)} placeholder="city"></input>
                <Button className="w-16 h-14 bg-[#f7f9fa] dark:bg-[#1e293b] dark:text-white text-[#0f172af9] rounded-md shadow-none hover:shadow-none  px-3 py-3 flex justify-center items-center  " onClick={props.props.push}>
                    <LocationSearchingOutlinedIcon  />
                </Button>
            </div>
    )
}
