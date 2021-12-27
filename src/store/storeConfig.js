import { createStore, combineReducers } from "redux";

import numeroReducer from "./reducers/numeroReducer";

const reducers = combineReducers({
    numeros: numeroReducer,
    // nomes: function (state, action){
    //     console.log("Reducer Nomes...")
    //     console.log(state, " ", action)
    //     return [
    //         "Ana",
    //         "Bia",
    //         "Lavi",
    //         "Carlos"
    //     ]
    // }
})

function storeConfig () {
    return createStore(reducers)
}

export default storeConfig