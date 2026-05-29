const Cart = ({carts}) => {
    console.log(carts);
     return(
        <div className="p-18">
            <h1 className="text-2xl font-bold">Your Cart</h1>


             <div className="space-y-5 mt-5">
            {
                carts.map(item => <div className="flex items-center justify-between border border-red-300 rounded-3xl  p-5" key={item.id}>
                       <div className="flex items-center gap-3">
                         <div>
                        <img src={item.image} alt="" className="h-20 w-20 object-contain"/>
                      </div>
                      <div>
                          <h2 className="text-2xl font-bold">{item.title}</h2>
                          <p>{item.description}</p>
                      </div>
                       </div>
                      <div className="text-3xl font-bold">${item.price}/month</div>
                </div>)
            }
            </div>

            <div className="flex justify-between bg-black text-white p-5 mt-5 rounded-lg text-2xl">
                <div>Total</div>
                <div>0</div>
            </div>
        </div>
     )
}
export default Cart;