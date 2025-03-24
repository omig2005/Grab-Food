import React, { useState } from 'react'
import { RxCross2 } from "react-icons/rx";
import { useSelector } from 'react-redux';
import { FaShoppingCart } from "react-icons/fa";
import toast from "react-hot-toast";
import CartItem from './CartItem';
import { useNavigate } from 'react-router-dom';



function Cart() {

const navigate=useNavigate();

const [active,setActive]=useState(false);


const cartItem =useSelector((state)=>state.cart.cart);

const totalItem=cartItem.reduce(( totalItem,item)=>
  totalItem + item.qty,0); 

const totalAmount=cartItem.reduce(( totalAmount,item)=>
totalAmount + item.qty*item.price,0); 

console.log(cartItem);

  return (  <>  

  {/* <Toaster  position='top-center' reverseOrder={false} /> */}
  <div className={`fixed right-0 top-0
     bg-amber-50 w-full lg:w-[20vw] h-full transition-transform 
     duration-300 ease-in-out ${active ? "translate-x-0" : "translate-x-full"}`}>
      

      <div className=' my-3  m-2 flex justify-between flex-row items-center'>
     <span  className=' font-semibold text-gray-700'>My Orders</span>
     <RxCross2  onClick={()=>setActive(!active)}  className=' border-1   border-b-gray-600  hover:text-red-400 hover:border-red-400 '/>
     </div>

     {cartItem.map((food)=>{

      return  <CartItem 
       key={food.id}  
      id={food.id}
      name={food.name} 
      image={food.image} 
      price={food.price} 
      qty={food.qty}

            // handleToasterForRemove={handleToasterForRemove}
             />

     })

     }




     <div  className='absolute bottom-0  mb-2 m-2'>
     <h3 className=' font-semibold text-gray-700' >Item:{totalItem}</h3>
     <h3 className=' font-semibold text-gray-700' >Total Amount: {totalAmount}</h3>
  
     <hr className=' font-semibold   text-gray-400'/>
     <button  onClick={cartItem.length? ()=>navigate("/success"): ""}  className='  my-2 p-2  mx-3   w-[90vw] lg:w-[18vw]  rounded-lg text-white bg-emerald-400  items-center'>Checkout</button>
     </div>

    
    </div>


    <FaShoppingCart  
  className={`text-6xl shadow-md p-3 fixed bottom-13    bg-gray-100  rounded-2xl right-10     ${ cartItem.length>0?"animate-bounce":""} 
    ${active ? "pointer-events-none opacity-0" : "cursor-pointer"}`}  
  onClick={() => !active && setActive(true)}
/>


    

    </>
  )
}

export default Cart
