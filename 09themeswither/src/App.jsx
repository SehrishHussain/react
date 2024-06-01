import { useState, useEffect } from 'react';
import './App.css'
import { ThemeProvider } from './contexts/theme'
import Card from './components/Card';
import ThemeButton from './components/ThemeButton';

function App() {
const [themeMode, setThemeMode] = useState("light");  //these r for the buttons etc

const lightTheme = () => {
  setThemeMode("light")
}

const darkTheme = () => {
  setThemeMode("dark")
}

//actual change in theme in JS

useEffect(() => {

  document.querySelector('html').classList.remove("light", "dark")
  document.querySelector('html').classList.add(themeMode)}, [themeMode])



  return (  // lighttheme, darktheme, themeMode are methods. If methods arnt defined use them as it is then define them, then ,methods will be passed themselves
   <ThemeProvider value={{themeMode, lightTheme, darkTheme}}>  
<div className="flex flex-wrap min-h-screen items-center">
    <div className="w-full">
        <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            {/* themebtn */}
            <ThemeButton/>
        </div>
        <Card/>
            {/* Card */}
        <div className="w-full max-w-sm mx-auto">
            
        </div>
    </div>
</div>
</ThemeProvider>
  )
}

export default App
