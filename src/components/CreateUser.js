import React, { useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { selectUsers, setUsersList, createNewUser, getUsers, selectNewUsers } from "../redux/slicers/app"
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import menu from '../menu.png';
import { useForm } from "react-hook-form";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import Box from '@mui/material/Box';


function CreateUser() {

  const users = useSelector(selectUsers);
  const newUsers = useSelector(selectNewUsers);
  const dispatch = useDispatch();
  const history = useHistory();

  const {
    register,
    formState: { errors },
    watch,
    setValue,
    handleSubmit
  } = useForm({
    mode: "all",
    defaultValues: {
      nameNew: '',
      emailNew: '',
      row: newUsers
    }
  })


  const addUserHandler = () => {

    const newUser = {
      id: users.length > 0 ? users[users.length - 1]?.id + 1 : 1,
      name: watch('nameNew'),
      email: watch('emailNew'),
    }

    dispatch(createNewUser(newUser)).then(() => { dispatch(getUsers()); history.push("/") })

    dispatch(setUsersList([...users, newUser]));
    if (!errors) {
      history.push("/");
    }
    console.log(errors)
  }

  const addNewUserHandler = (event) => {
    event.preventDefault();
    const newUser = {
      id: users.length > 0 ? users[users.length - 1]?.id + 1 : 1,
      title: watch('nameNew'),
      description: watch('emailNew'),
    }
    setValue('row', [...watch('row'), newUser]);
    //dispatch(setUsersList([...users, newUser]));
    if (!errors) {
      history.push("/");
    }
  }

  return (
    <div>

      <div className='header'>
        <img src={menu} alt="Logo" /><p><Link to="/">Phonebook</Link></p>
      </div>
      <Box
        component="form"
        sx={{
          '& .MuiTextField-root': { m: 1, width: '25ch', color: 'white' },
        }}
        noValidate
        autoComplete="off"
        className='add-area'
        onSubmit={handleSubmit(addUserHandler)}
      >

        {watch('row')?.length > 0 ? watch('row').map((item, index) => (
          <div key={item.id}>
            <TextField
              required
              id="standard-required"

              // defaultValue="Hello World"
              variant="outlined"
              // error={!!errors?.nameNew}
              {...register("nameNew", { required: "Valodik" })}
              label="add new contact's name"
            />
            {/* {errors?.nameNew && (
              <p>{errors?.nameNew?.message}</p>
            )} */}


            <TextField
              required
              id="standard-required"

              variant="outlined"
              // error={!!errors?.emailNew}

              {...register("emailNew", { required: "Gugo" })}
              label="add new contact's email"
            />

            {/* {errors?.emailNew && (
              <p>{errors?.emailNew?.message}</p>
            )} */}

          </div>
        ))
          : null
        }


        <Button type='submit' variant='outlined' startIcon={<AddIcon />}
         
        >Add to the List</Button>



        <Button type='submit' 
          
          variant='outlined' onClick={(e) => addNewUserHandler(e)} >Add other user</Button>

      </Box>
    </div>
  )
}

export default CreateUser