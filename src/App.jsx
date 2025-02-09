import './App.css'
import Home from "./components/home"
import AboutMe from "./components/aboutMe"

function App() {

  return (
    <div className='flex flex-col'>
      {/* Navigations */}
      <nav className="mx-48 text-lg p-12 flex justify-between items-center" style={{ color: "#fffffe" }}>
            <div>
                Logo
            </div>
            <div>
                <ul className="flex flex-row gap-8 ">
                    <li className='text-orange-400'>Home</li>
                    <li><a href="#aboutme">About</a></li>
                    <li>Skills</li>
                    <li>Projects</li>
                    <li>Contact</li>
                </ul>
            </div>
      </nav>
       <div className="mx-48 h-screen">
          <Home />
      </div>
      <div className='h-screen '>
          <AboutMe /> 
      </div>
      <div className='text-white flex  justify-center w-full bottom-5 animate-bounce text-3xl fixed'>
        <ion-icon name="arrow-down-circle-outline" className="cursor-pointer hover:opacity-50"></ion-icon>
      </div>
    </div>
  )
}

export default App
