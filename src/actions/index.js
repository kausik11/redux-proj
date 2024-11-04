//action creater function

const addtodo = (text)=>{
  return{
    type:"ADD-TASK",
    payload:{
        id: new Date().getTime(),
        text:text,
    },
  };
};

const deletetodo = (id)=>{
 return{
    type:"DELETE-TASK",
    payload: id,
 };
};
export {addtodo,deletetodo};