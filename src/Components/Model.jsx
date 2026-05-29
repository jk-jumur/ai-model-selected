import { use } from "react";


const Model = ({modelPromise}) => {
    const models = use(modelPromise);
    console.log(models);

    return (
        <div className="py-20 max-w-6xl mx-auto">
              <div className="text-center">
               <h2 className="text-5xl font-bold">Choose Your AI Model</h2>
               <p>One subscription gives you access to all frontier AI models</p>
             </div>

             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                 {
                    models.map(model => 
                      
                    
                    <div className="shadow-lg rounded-lg border-zinc-300 overflow-hidden">
                          <div className="flex justify-center items-center  h-56 bg-zinc-300">
                              <img  className="h-40 w-40 object-contain" src={model.image} alt="" />
                          </div>
                          <div className="p-5 space-y-3">
                         <h2 className="text-5xl font-bold">{model.title}</h2>
                         <p>{model.description}</p>
                          <div className="text-3xl font-bold">${model.price}/month</div>

                          <button className="btn bg-red-600 text-white rounded-lg mt-6 w-full">Subscribe Now</button>
                         </div>
                    </div>)
                 }
             </div>
        </div>
    );
};

export default Model;