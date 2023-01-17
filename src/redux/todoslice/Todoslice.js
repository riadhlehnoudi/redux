import { createSlice } from '@reduxjs/toolkit'

const initialState = {
 todolist:[
    {
        id:Math.random(),
        title:"todo item 1",
        description:"descrition todo item1",
        isDone:false,
    },
 {
    id:Math.random(),
    title:"todo item 2",
    description:"descrition todo item2",
    isDone:false,
},
{
    id:Math.random(),
    title:"todo item 3",
    description:"descrition todo item3",
    isDone:true,
},
 ],
};

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
   
    addtask: (state, action) => {
state.todolist.push(action.payload);

    },
    removeTask: (state, action) => {
      state.todolist=state.todolist.filter((el)=>el.id!==action.payload.id)
      
          },
          doneTask: (state, action) => {
            let i=state.todolist.findIndex((el)=>el.id==action.payload.id);
      state.todolist[i]={...state.todolist[i],isDone:!state.todolist[i].isDone}            
                },
                updateTask: (state, action) => {
                  let i=state.todolist.findIndex((el)=>el.id==action.payload.id);
            state.todolist[i]={...state.todolist[i],
              title:action.payload.edited.title,
              description:action.payload.edited.description,          
                      };
              
                    },
},
});

// Action creators are generated for each case reducer function
export const {  addtask,removeTask,doneTask ,updateTask} = todoSlice.actions;

export default todoSlice.reducer;