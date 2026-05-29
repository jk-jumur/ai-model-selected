
import { useState } from 'react'
import './App.css'
import Banner from './Components/Banner'
import Cart from './Components/Cart'
import Footer from './Components/Footer'
import Models from './Components/Models'
import NavBar from './Components/NavBar'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


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
         <div className="tabs tabs-box justify-center bg-transparent gap-4">

  <input
    type="radio"
    name="my_tabs_1"
    className={`tab rounded-full w-45 text-white border-0 transition-all duration-300
    ${
      activeTab === "model"
        ? "bg-linear-to-r from-blue-900 via-pink-800 to-pink-600"
        : "bg-gray-300 text-black"
    }`}
    aria-label="Models"
    onClick={() => setActiveTab("model")}
    defaultChecked
  />

  <input
    type="radio"
    name="my_tabs_1"
    className={`tab rounded-full w-45 text-white border-0 transition-all duration-300
    ${
      activeTab === "cart"
        ? "bg-linear-to-r from-blue-900 via-pink-800 to-pink-600"
        : "bg-gray-300 text-black"
    }`}
    aria-label="Cart"
    onClick={() => setActiveTab("cart")}
  />

</div>
     
         {/* {activeTab === "model" && <Models modelPromise={modelPromise}/>}
              {activeTab === "cart" && <Cart/>} */}
              {activeTab === "model" ? <Models modelPromise={modelPromise} carts={carts} setCarts={setCarts}/> : null}

              {activeTab === "cart" ? <Cart carts={carts} setCarts={setCarts}/> : null}

               <ToastContainer />
        <Footer/>
        
     

   

     
    </>
  )
}

export default App
