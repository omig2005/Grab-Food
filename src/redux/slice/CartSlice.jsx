import { createSlice } from "@reduxjs/toolkit";

const CartSlice=createSlice({


    name: "cart",
    initialState:{
     cart:[],
    }
    ,
    reducers:{

        addtoCart: (state, action) => {
            const existItem = state.cart.find((item) => item.id === action.payload.id);
          
            if(existItem){
        state.cart= state.cart.map((item)=>
     item.id===action.payload.id?{ ...item, qty: item.qty + 1 }: item
              );}


         else {
              state.cart.push(action.payload); // Ensure qty is set when adding a new item
            }
          }


    ,removerFromCart:(state,action)=>{
     state.cart=state.cart.filter((item)=>item.id!==action.payload.id);
        },

      decerementAmount:(state,action)=>{
        state.cart= state.cart.map((item)=>
            item.id===action.payload.id?{ ...item, qty: item.qty -1 }: item
                     );
      
      }, 
      incrementAmount:(state,action )=>{
        state.cart= state.cart.map((item)=>
            item.id===action.payload.id?{ ...item, qty: item.qty + 1 }: item
                     );
      }




    },
});

export const {addtoCart,removerFromCart ,incrementAmount,decerementAmount} =CartSlice.actions;
export default CartSlice.reducer;
