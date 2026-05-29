
import './App.css'
import Banner from './Components/Banner'
import Footer from './Components/Footer'
import Model from './Components/Model'
import NavBar from './Components/NavBar'


const getModel = async() => {
     const res = await fetch("/models.json")
     return res.json()
}

const modelPromise = getModel();

function App() {
  

  return (
    <>
  
        <NavBar/>
        <Banner/>
         <Model modelPromise={modelPromise}/>
        <Footer/>
        
     

   

     
    </>
  )
}

export default App
