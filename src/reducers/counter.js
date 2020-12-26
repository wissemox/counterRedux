import React from "react"
const CounterReducer = (state = 0 , action)=> { 
    switch (action.type) {
        case "INCREMENT":
          return state + 1;
        case "DECREMENT":
          return state - 1;
         case "Reset" :
             return state=0; 
        default:
            // mana3rch jjarbt bi defaul mahbtch
          return state;
      }
}
export default CounterReducer