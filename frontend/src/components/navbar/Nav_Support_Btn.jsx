import { Button } from "@material-tailwind/react";
import GitHubIcon from '@mui/icons-material/GitHub';

export default function Nav_Support_Btn() {
    return (
        <Button className="w-full sm:w-auto text-base gap-5 flex justify-center items-center font-[Inter,sans-serif] tracking-wide font-medium shadow-none hover:shadow-none bg-[#0f172af9] dark:bg-white dark:text-[#1e293b] capitalize" onClick={()=>{window.open(import.meta.env.VITE_SUPPORT_BTN_URL, "_blank")}}> <GitHubIcon /> Support Project</Button>
    )
}
