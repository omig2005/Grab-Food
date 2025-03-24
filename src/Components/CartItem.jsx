import React from "react";
import { MdDelete } from "react-icons/md";
import { FaPlus, FaMinus } from "react-icons/fa6";
import { useDispatch } from "react-redux";
import { removerFromCart ,incrementAmount,decerementAmount } from "../redux/slice/CartSlice";
import toast from "react-hot-toast";
function CartItem({ id, name, image, price,qty }) {
  const dispatch = useDispatch();

  return (
    <div className="w-full bg-white rounded-lg m-2 shadow-2xl  p-2 flex ">
      <img className="w-[50px] h-[50px] flex cursor-grab " src={image} alt="" />

      <div>
        <p className="font-bold ">{name}</p>

        <div className="flex justify-between">
          <span className=" text-green-400 font-bold">&#8377;{price}</span>

          <div className="flex justify-center items-center gap-1 absolute right-7">
            <FaMinus  onClick={()=> qty>1&&dispatch(decerementAmount({id}))}   className="border-1  border-gray-400  bg-white  hover:text-white   hover:bg-green-400  rounded-lg  p-1 text-sm" />

            <span>{qty}</span>
            <FaPlus  onClick={()=>dispatch(incrementAmount({id}))}   className="border-1  border-gray-400  bg-white  hover:text-white   hover:bg-green-400  rounded-lg  p-1 text-sm" />
          </div>
        </div>
      </div>

      <div className="absolute right-0 mr-2 cursor-grab">
        <MdDelete
          
        onClick={()=>{ dispatch(removerFromCart({id}));
       
        toast(`${name} Remover`, {
          icon: '👏',
        });
        }
        }
        />
      </div>
    </div>
  );
}

export default CartItem;
