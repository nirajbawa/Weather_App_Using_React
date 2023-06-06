import { Button } from "@material-tailwind/react";
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

export default function Home_Left_Btn(props) {
  return (
    <Button className="w-full sm:w-auto text-base flex justify-center items-center gap-2nhgtyu57868 dark:bg-white dark:text-[#1e293b] font-[Inter,sans-serif] tracking-wide font-medium shadow-none hover:shadow-none cursor-pointer bg-[#0f172af9] capitalize" onClick={props.fetchData}> <SearchOutlinedIcon />Search</Button>
  )
}
