import {Routes , Route} from 'react-router-dom'
import './App.css'
import Home from './components/Home'
import Destınation from './components/Destınation'
import Crew from './components/Crew'
import Technology from './components/Technology'
import Others from './components/Others'
import Navbar from './components/Navbar'
import Europa from './components/Planets/Europa'
import Mars from './components/Planets/Mars'
import Titan from './components/Planets/Titan'


function App() {
  

  return (
   <div className='App'>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/destination" element={<Destınation/>}/>4
      <Route path="/crew" element={<Crew/>}/>
      <Route path="/technology" element={<Technology/>}/>
      <Route path="*" element={<Others/>}/>
      <Route path="/destination/europa" element={<Europa/>}/>
      <Route path="/destination/mars" element={<Mars/>}/>
      <Route path="/destination/titan" element={<Titan/>}/>

    </Routes>

   </div>
  )
}

export default App
