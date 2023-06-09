import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'
import Navbar from './components/navbar/Navbar'
import Home from './components/home/Home'
import App_Alert from './components/alert/App_Alert'
import { useState, useEffect } from 'react';



function App() {
  let [city, setcity] = useState("")
  let [stack, setStack] = useState([])
  let [open, setOpen] = useState(false);
  let [message, setMessage] = useState("")
  let [mode, setMode] = useState(false)

 

  let setDarkMode = () => {
    if (mode == false) {
      setMode(true)
      document.body.classList.add("dark")
    }
    else {
      setMode(false)
      document.body.classList.remove("dark")
    }

  }

  let detectTheme = () => {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      document.body.classList.add("dark")
      setMode(true)
    }
  }

  useEffect(() => {
    detectTheme();
  },[])
   

  let setAlert = (msg) => {
    setMessage(msg)
    setOpen(true)
    setTimeout(() => {
      setOpen(false)
    }, 7000);
  }


  let push = () => {
    if (city.match(/[a-zA-Z]/)) {
      if (stack.length != 5) {
        if (!stack.includes(city.toLowerCase())) {
          setStack(oldArray => [city.trim(), ...oldArray])
          setcity("")
        }
        else {
          setAlert("City name is already in stack")
        }
      }
      else {
        setAlert("Stack is full only 5 cities are allowed")
      }

    }
    else {
      setAlert("Please enter valid city name")
    }

  }

  return (
    <>
      <Router>
        <Navbar city={city} setcity={setcity} stack={stack} setStack={setStack} push={push} setDarkMode={setDarkMode} mode={mode} />
        <Routes>
          <Route exact path="/" element={<Home city={city} setcity={setcity} stack={stack} setStack={setStack} push={push} setAlert={setAlert} />} />
        </Routes>
        <App_Alert open={open} setOpen={setOpen} message={message} />
      </Router>
    </>
  )
}

export default App
