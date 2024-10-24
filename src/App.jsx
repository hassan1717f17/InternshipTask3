import ColorPalet from "./components/ColorPalet"
import GetInTouch from "./components/GetInTouch"
import Header from "./components/Header"
import Services from "./components/Services"
import ServicesCard from "./components/ServicesCard"

function App() {

  return (
    <div>
      <Header/>
      <ServicesCard/>
      <Services/>
      <ColorPalet/>
      <GetInTouch/>
    </div>
  )
}

export default App
