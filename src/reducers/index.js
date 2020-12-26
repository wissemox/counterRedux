import CounterReducer from './counter' ;

import {combineReducers} from 'redux' ; 

const Allrducers = combineReducers({
    Counter : CounterReducer,
  

})
export default Allrducers