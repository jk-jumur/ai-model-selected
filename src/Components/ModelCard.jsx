import { useState } from "react";


const ModelCard = ({model, carts, setCarts}) => {
      const [isSubscribed, setIsSubscribed] = useState(false)

      const handleSubscription = () =>{
          setIsSubscribed(true)
          setCarts([...carts, model])
      }
    return (
         <div className="shadow-lg rounded-lg border-zinc-300 overflow-hidden">
                          <div className="flex justify-center items-center  h-56 bg-zinc-300">
                              <img  className="h-40 w-40 object-contain" src={model.image} alt="" />
                          </div>
                          <div className="p-5 space-y-3">
                         <h2 className="text-5xl font-bold">{model.title}</h2>
                         <p>{model.description}</p>
                          <div className="text-3xl font-bold">${model.price}/month</div>

                          <button onClick={handleSubscription} className="btn bg-red-600 text-white rounded-lg mt-6 w-full">{isSubscribed? "Subscribed" : "Subscribe Now"}</button>
                         </div>
                    </div>
    );
};

export default ModelCard;