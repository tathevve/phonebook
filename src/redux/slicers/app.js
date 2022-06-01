import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';

const name = 'APP';

const initialState = {
    newUserCreating: [],
    usersList:[
      {
        id:1,
        name: "Drake",
        email:"drake@tatev.com"
      },
      {
        id:2,
        name: "A$AP Rocky",
        email:"asaprocky@tatev.com"
        
      },
      {
        id:3,
        name: "Eminem",
        email:"eminem@tatev.com"
      }
    ]
  };

export const getUsers = createAsyncThunk (
  
  `${name}/getUsers`,
  async()=> {
    //const response = await fetch('https://jsonplaceholder.typicode.com/posts');
   // return response.json();
    return await fetch('https://dummyjson.com/products').then((res)=>res.json())
  }

);


export const  deleteUser = createAsyncThunk(
  `${name}/deleteUser`,
  async(id)=>{
    return await fetch(`https://dummyjson.com/products/${id}`, {
      method: 'DELETE',
  
    }).then((res)=>res.json())
  }
) 
  
export const createNewUser = createAsyncThunk(
  `${name}/createNewUser`,
  async(newUser)=>{
    return await fetch('https://jsonplaceholder.typicode.com/posts', {
      method:'POST',
      body: JSON.stringify(newUser),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    }).then((response) => response.json())
    //.then((json) => console.log(json));
  }
)

export const searchUser = createAsyncThunk (
  `${name}/searchUser`,
  async(title)=>{
    return await fetch(`https://dummyjson.com/products/search?q=${title}`)
    .then(res => res.json())

  }

)


export const updateUser = createAsyncThunk (
  `${name}/updateUser`,
  async(changedUser) => {
    return await fetch('https://dummyjson.com/products/add', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        title: changedUser,
      /* other product data */
      })
    })
    .then(res => res.json())
  }
)

const appSlice = createSlice({
    name,
    initialState,
    reducers:{ setUsersList(state, {payload}) {
           state.usersList = payload;
         },

         setNewUserCreating (state, {payload}) {
           state.newUserCreating = payload;
         },
        },

    //   extraReducers: builder => {
    //   builder.addCase(getUsers.fulfilled,(state,{payload})=> {
    //     state.usersList = payload?.products;
    //   })
    //   // builder.addCase(deleteUser.fulfilled,(state,{payload})=> {
    //   //   state.usersList = payload?.products;
    //   // })
    // }


  }); 
    
export const {setUsersList} = appSlice.actions;
export const {setNewUserCreating} = appSlice.actions;

export const selectUsers = (state) => state.app.usersList;
export const selectNewUsers = (state) => state.app.newUserCreating;
  
export default appSlice.reducer;

