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
  console.log(id)
  const [] = useReducer()

  const user = useMemo (()=> {
    return users.find((user)=> user.id === parseInt(id))
  },[users]) 
  console.log(user.title)

  useEffect(() => {
    dispatch(getUsers())
  },[])
  
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
      nameUpdated: user.name,
      emailUpdated:user.email
    }
  })





  const editHandler = (id) => {
    const changedUser = users.map((item) => {
      if(item.id === id) {
        return {...item, name: watch('nameUpdated'), email:watch('emailUpdated')}
      }else {
        return {...item}
      }
    }) 
    
    //dispatch(updateUser(changedUser)).then(()=>{dispatch(getUsers());history.push("/")})

   dispatch(setUsersList(changedUser));
    history.push("/");
    console.log(changedUser)
  }


  return (
    <div> 

      <div className='header'>
        <img src={menu} alt="Logo" /><p><Link to="/">Phonebook</Link></p>
      </div>
    <div className='search-area'>

        <TextField
          id="standard-helperText"
          label="Helper text"
          helperText="Default value"
          variant="standard"
          onChange={(event) => setValue("nameUpdated",event.target.value)}
          {...register("nameUpdated")}
        />


        <TextField
          id="standard-helperText"
          label="Helper text"
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