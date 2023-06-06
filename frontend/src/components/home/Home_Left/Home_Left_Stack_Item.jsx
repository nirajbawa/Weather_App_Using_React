import PropTypes from 'prop-types';
import DeleteIcon from '@mui/icons-material/Delete';
import { Button } from "@material-tailwind/react";

export default function Home_Left_Stack_Item(props) {


    let DeleteElement = () =>{
        let arr = props.props.stack

        
        
        let newarr = arr.filter((value, index)=>{
            if(index!=props.i)
            {
                return value
            }
        })

        props.props.setStack(newarr)
        console.log(newarr)
    }

    return (
        <li className="py-3 flex items-center content-center w-full text-center ">
            <span className='text-center w-full'>{props.name}</span>
            <Button className="w-16 h-14 bg-[#f7f9fa] dark:bg-[#1e293b] dark:text-white rounded-lg shadow-none hover:shadow-none  px-3 py-3 flex justify-center items-center hover text-red-500 active:text-red-300" onClick={DeleteElement}>
                <DeleteIcon />
            </Button>
        </li>
    )
}

Home_Left_Stack_Item.propTypes = {
    name: PropTypes.string
}
