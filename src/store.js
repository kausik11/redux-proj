// import { applyMiddleware, createStore } from "redux";
// import { thunk } from "redux-thunk";
// import { composeWithDevTools } from "@redux-devtools/extension";

// import rootreducer from "./reducers";

// const store = createStore(rootreducer,
//     composeWithDevTools(applyMiddleware(thunk))
// )

// export default store;


//applying redux toolkit
import { configureStore } from "@reduxjs/toolkit";
import todoReducer from './features/todo/todoslice';

const store = configureStore({
    reducer:{
        todo:todoReducer,
    }
});

export default store;