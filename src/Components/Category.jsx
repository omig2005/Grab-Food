import React, { useEffect, useState } from "react";
import FoodData from "../fooddata/foodData";
import { useDispatch, useSelector } from "react-redux";
import { setCategory } from "../redux/slice/categorySlice";
export default function Category() {
  const [categories, setCategories] = useState([]);

  const listUniqueCategories = () => {
    const uniquecat = [...new Set(FoodData.map((food) => food.category))];

    setCategories(uniquecat);

    console.log(uniquecat);
  };

  useEffect(() => {
    listUniqueCategories();
  }, []);

  const dispatch = useDispatch();
  const selectedCategory = useSelector((state) => state.category.category);

  return (
    <div className="mx-8 ">
      <h1 className="text-2xl font-bold ">Get Your Choice</h1>
      <div className="my-5 flex gap-6 overflow-x-scroll  scroll-smooth lg:overflow-x-hidden ">
        <button
          onClick={() => dispatch(setCategory("All"))}
          className={` px-2 py-2 bg-gray-200   font-bold rounded-lg   hover:bg-green-500 hover:text-white ${selectedCategory==="All" &&"bg-green-500 text-white"} `}
        >
          All
        </button>

        {categories.map((category, index) => (
          <button
            key={index}
            onClick={() => dispatch(setCategory(category))}
            className={` px-2 py-2 bg-gray-200   font-bold rounded-lg   hover:bg-green-500 hover:text-white ${selectedCategory===category &&"bg-green-500 text-white"} `}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
}
