import React from "react";
import { FaStar } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { addtoCart} from "../redux/slice/CartSlice";
import toast from "react-hot-toast";
function FoodCard({ id,name,price,rating,image,desc,handleToaster}) {

const dispatch=useDispatch();  


  return (
    <div className="  w-[250px]   m-5 bg-white  p-5  flex flex-col rounded-lg ">
      <div className="w-[full]">
        <img
          className="  w-[220px] h-[130px] hover:scale-110   transition-transform cursor-grab  ease-in-out"
          src={image}
          alt=""
        />
      </div>
      <div  className=" my-2 flex flex-row justify-between">
        <h2>{name}</h2>
        <span className="text-green-400 text-1xl font-bold">&#8377;180</span>
      </div>
      <div>
        <p>{desc.length<30?desc:desc.slice(0,30)}</p>
        <div className="flex justify-between flex-row py-2">

            <span className="flex justify-center items-center ">
            <FaStar  className="mr-1 text-yellow-300"/>4.5
         </span>
          <button 
          
          onClick={()=>{dispatch(addtoCart({id,name,price,rating,image,qty:1}));
        // handleToaster(name);
        toast.success(`${name} Added successfully`, {
          // icon: '',
        });
        }}  
           
          className=" text-sm  p-1 bg-green-400     font-bold rounded-lg  text-white  border hover:bg-gray-300  hover:text-black ">
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default FoodCard;
