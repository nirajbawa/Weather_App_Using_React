

import Nav_Search from './Nav_Search'
import Nav_Support_Btn from './Nav_Support_Btn'
import Nav_Title from './Nav_Title'


export default function Navbar(props) {
  return (
    <nav className="w-full px-3 py-7 lg:py-12 md:px-10 lg:px-28  flex justify-between flex-wrap gap-5 dark:bg-[#0f172a]">


      <Nav_Title setDarkMode={props.setDarkMode}/>
      <Nav_Support_Btn  />
      <Nav_Search props={props}/>

    </nav>
  )
}
