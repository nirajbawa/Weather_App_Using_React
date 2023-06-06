import CloudIcon from '@mui/icons-material/Cloud';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import { Button } from "@material-tailwind/react";

export default function Nav_Title(props) {
    return (
        <div className=" flex justify-center sm:justify-between gap-x-5 gap-y-5 w-full sm:w-3/5 grow flex-wrap content-center items-center ">
            <div className="w-44 sm:w-56 lg:w-40 h-14 lg:h-14 flex justify-center items-center tracking-wide rounded-md bg-[#f7f9fa] dark:bg-[#1e293b] dark:text-white gap-3 text-lg float-right font-[Inter,sans-serif] lowercase font-semibold text-[#0f172af9] grow sm:grow-0 "><CloudIcon />  Weather</div>
            <Button className="w-16 h-14 lg:h-14 bg-[#f7f9fa] rounded-md shadow-none hover:shadow-none  px-3 py-3 flex justify-center items-center shrink dark:bg-[#1e293b] dark:text-white text-[#0f172af9]" onClick={props.setDarkMode}><DarkModeOutlinedIcon /></Button>
        </div>
    )
}
