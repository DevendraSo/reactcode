import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
name:"counter",
initialState: {
    counter:0,
}, 
reducers:{
    increment: (state) =>{
        state.counter +=1;

    },

    decrement: (state) =>{
        state.counter -=1;

    },

    incrementBy: (state, action) =>{
        //console.log(state, action);
        state.counter += action.payload;
    },

    decrementBy: (state, action) =>{
        //2 console.log(state, action);
        state.counter -= action.payload;
    },

},

});

console.log(counterSlice);
export const { increment, decrement, incrementBy,decrementBy } = counterSlice.actions;
export default counterSlice.reducer;