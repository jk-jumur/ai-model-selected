
import { useState } from 'react'
import './App.css'
import Banner from './Components/Banner'
import Cart from './Components/Cart'
import Footer from './Components/Footer'
import Models from './Components/Models'
import NavBar from './Components/NavBar'


const getModel = async() => {
     const res = await fetch("/models.json")
     return res.json()
}

const modelPromise = getModel();

function App() {
  
    const [activeTab, setActiveTab] = useState("model")
    // console.log(activeTab)
    const [carts, setCarts] = useState([])
        //  console.log(carts)
  return (
    <>
  
        <NavBar/>
        <Banner/>

         {/* <!-- name of each tab group should be unique --> */}
         <div className="tabs tabs-box justify-center bg-transparent">
             <input type="radio" name="my_tabs_1" className="tab rounded-full w-45" aria-label="Models" onClick={()=> setActiveTab("model")} defaultChecked />

             <input type="radio" name="my_tabs_1" className="tab rounded-full w-45" aria-label="Cart" onClick={()=> setActiveTab("cart")} />

            
     </div>
           
     
         {/* {activeTab === "model" && <Models modelPromise={modelPromise}/>}
              {activeTab === "cart" && <Cart/>} */}
              {activeTab === "model" ? <Models modelPromise={modelPromise} carts={carts} setCarts={setCarts}/> : null}

              {activeTab === "cart" ? <Cart carts={carts} setCarts={setCarts}/> : null}
        <Footer/>
        
     

   

     
    </>
  )
}

export default App
