// this is root reducer that combine all the individual reducers in the application 
import taskreducer from "./taskreducer";
import { combineReducers } from "redux";
import React from 'react'

const rootreducer = combineReducers({
 task: taskreducer,
})

export default rootreducer;
