import Home_Left_Stack from './Home_Left_Stack'
import Home_Left_Btn from './Home_Left_Btn'

export default function Home_Left(props) {
    return (
        <div className="flex justify-center flex-col items-center px-2 gap-8 md:px-8 lg:px-12 py-4 md:py-0 w-full  lg:md:w-2/3 xl:w-5/12  h-full">
            <Home_Left_Stack props={props.props} />
            <Home_Left_Btn fetchData={props.fetchData}/>
        </div>
    )
}
