
import './App.css'
import Banner from './Components/Banner'
import Footer from './Components/Footer'
import Models from './Components/Models'
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
         <Models modelPromise={modelPromise}/>
        <Footer/>
        
     

   

     
    </>
  )
}

export default App
