import React from 'react'
import FoodCard from './FoodCard'
import FoodData from '../fooddata/foodData'
import toast, { Toaster } from 'react-hot-toast';
import { useSelector } from 'react-redux';



function FoodItems() {

  const category=useSelector((state)=>state.category.category)
  const search=useSelector((state)=>state.search.search)
  const handleToaster= (name) => toast.success(`${name}  Added successfully.`);
  
  return (

<>
<Toaster  position='top-center' reverseOrder={false} />

    <div  className='flex  mx-6  justify-center flex-wrap gap-10'>
     
{

// id: 1,
//      img: "https://img.freepik.com/free-photo/seafood-pizza_74190-5944.jpg?w=996&t=st=1693062328~exp=1693062928~hmac=53fd9ad496580db41c6ca8066510cd89c6b0a0389de8bb6b875a78a1eda09cb5",
//      name: "Onion Pizza",
//      price: 150,
//      desc: "A delicious pizza topped with fresh onions for a delightful flavor combination. This pizza is perfect for onion lovers and offers a unique twist on the classic pizza experience. Enjoy the perfect blend of cheesy goodness and the sharp taste of onions in every bite. Whether you're sharing with friends or enjoying it all to yourself, this Onion Pizza is sure to satisfy your pizza cravings.",
//      category: "Lunch",
//      rating: 4.5,

    FoodData .filter((items)=>{
    if(category=="All"){

      return items.name.toLowerCase().includes(search.toLowerCase());
    }

    else{

      return items.category===category &&items.name.toLowerCase().includes(search.toLowerCase());
    }



    }).map((items)=>{
         return   <FoodCard   key={items.id} 
           id={items.id} 
            name={items.name}
           price={items.price} 
           rating={items.rating}
           image={items.img}
           desc={items.desc}
          //  handleToaster={handleToaster} 
        />
    })
}



     
      </div>

      </>
  )
}

export default FoodItems
