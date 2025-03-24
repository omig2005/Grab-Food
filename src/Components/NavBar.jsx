import React from 'react'
import { useDispatch } from 'react-redux'
import { setSearch } from '../redux/slice/searchSlice';

export default function NavBar() {


  const dispatch=useDispatch();

  return (
   <nav className=' w-full  h- sticky top-0   transition-all duration-300   mx- flex justify-between   position-  flex-col lg:flex-row bg-blue-600'>
<div>

<h3 className='text-2xl  mx-2 font-light text-white '>{new Date().toUTCString().slice(0,16)}</h3>
<h2 className='text-3xl mx-2 font-bold text-white'>Beauty-Hook</h2>
</div>

<div className='py-3.5'>

<input     onChange={(e)=>dispatch(setSearch(e.target.value))}  className='border  text-white  border-gray-400 outline-none rounded-lg'   type="search" placeholder='   Search..'  name='search' id='' autoComplete='off' />
</div>  
{/* Need to use Focus on Search Bar   */}

   </nav>
  )
}
