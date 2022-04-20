import './App.css'
import { useState } from 'react'
import SideBar from './components/SideBar/SideBar'
import NavBar from './components/NavBar/NavBar'
import About from './components/About/About'
import Portfolio from './components/Portfolio/Portfolio'
import Contact from './components/Contact/Contact'
function App() {
  const [navigation, setNavigation] = useState(1)

  const onNavigate = (data) => {
    setNavigation(data)
  }

  return (
    <div className='App'>
      <SideBar />

      <main className='App-Main'>
        <NavBar onNavigate={onNavigate} navigation={navigation} />
        <About navigation={navigation} />

        <Portfolio navigation={navigation} />
        <Contact navigation={navigation} />
      </main>
    </div>
  )
}

export default App
