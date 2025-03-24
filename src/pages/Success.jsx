import React, { useEffect, useState } from 'react';
import { BarLoader } from "react-spinners";

function Success() {


  const [loader ,setLoader]=useState(true);

useEffect(()=>{

setTimeout(()=>{
setLoader(false)
},3000

)

},[]);


  return (
    <div className='flex flex-col justify-center items-center h-screen'>
      {loader? <BarLoader color="#4fa94d" width={150} />: <h3 className='text-2xl mt-4'>&#9989; Order placed Successfully !!</h3>
  }
    </div>
  );
}

export default Success;
