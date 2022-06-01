import React, {useCallback, useEffect, useMemo, useReducer, useState} from 'react';
import {useParams,useHistory, Link} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getUsers, selectUsers, setUsersList, updateUser} from "../redux/slicers/app"
import menu from '../menu.png';
import { useForm } from "react-hook-form";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SaveIcon from '@mui/icons-material/Save';

function UserDetails() {
  const users = useSelector(selectUsers);
 
  let { id } = useParams();

  const [] = useReducer()

  const user = useMemo (()=> {
    return users.find((user)=> user.id === parseInt(id))
  },[users]) 

  useEffect(() => {
    dispatch(getUsers())
  },[])
  
  //console.log(user)  
  const dispatch=useDispatch();
  const history =  useHistory();

  const {
    register,
    formState: {errors},
    watch,
    handleSubmit,
    setValue
  } = useForm({
    defaultValues:{
      nameUpdated: user.title,
      emailUpdated:user.description
    }
  })





  const editHandler = (id) => {
    const changedUser = users.map((item) => {
      if(item.id === id) {
        return {...item, title: watch('nameUpdated'), description:watch('emailUpdated')}
      }else {
        return {...item}
      }
    }) 
    
    dispatch(updateUser(changedUser)).then(()=>{dispatch(getUsers());history.push("/")})

   dispatch(setUsersList(changedUser));
    history.push("/");
    //console.log(changedUser)
  }

  console.log(watch())


  return (
    <div> 
      {/* <div>{user?.name }</div> */}

      <div className='header'>
        <img src={menu} alt="Logo" /><p><Link to="/">Phonebook</Link></p>
      </div>
    <div className='search-area'>
      {/* <input 
          // type="text" 
          // value={updatedName} 
          // onChange={(e)=>setUpdatedName(e.target.value)}
        
          
        /> */}

        <TextField
          id="standard-helperText"
          label="Helper text"
          // defaultValue="Default Value"
          helperText="Default value"
          variant="standard"
          onChange={(event) => setValue("nameUpdated",event.target.value)}
          {...register("nameUpdated")}
        />


        {/* <input 
          // type="text" 
          // value={updatedEmail}  
          // onChange={(e)=>setUpdatedEmail(e.target.value)}

          

          

        />   */}

        <TextField
          id="standard-helperText"
          label="Helper text"
          // defaultValue="Default Value"
          helperText="Default value"
          variant="standard"
          {...register("emailUpdated")}
        />

        <Button 
          onClick={()=>editHandler(user.id)}
          variant="outlined" startIcon={<SaveIcon />}
        >Save</Button>
    </div>
      
    </div>
  )
}

export default UserDetails