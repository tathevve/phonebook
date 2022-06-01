import React, { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import UsersItem from './UsersItem';
import { useDispatch, useSelector } from "react-redux";
import { deleteUser, getUsers, searchUser, selectUsers, setUsersList } from "../redux/slicers/app";
import { Link } from "react-router-dom";
import menu from '../menu.png';
import TextField from '@mui/material/TextField';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  linkBtn: {
    display: 'flex',
    backgroundColor: 'red',
    color: 'white',
    '&:hover': {
      backgroundColor: 'green'
    }
  },
}));



function UsersList() {

  const users = useSelector(selectUsers);
  const [defaultData, setDefaultData] = useState([...users])

  const [loading,setLoading] = useState(false);

  const dispatch = useDispatch();

  const styles = useStyles()

  useEffect(() => {
    dispatch(getUsers()).finally(() => {
      setLoading(true)
    })
  }, [])

  const removeItem = (user) => {

    dispatch(deleteUser(user.id)).then(() => dispatch(getUsers()))

    dispatch(setUsersList(users.filter(p => p.id !== user.id)))
  }

  const searchUsers = (event) => {

    dispatch(searchUser(event.target.value.toLowerCase()));

    if (event.target.value) {
      dispatch(setUsersList(users.filter(val => (val.title.toLowerCase().includes(event.target.value.toLowerCase())))))
    } else {
      dispatch(getUsers())
    }
  }


  return (
    <div>
      <div className='header'>
        <img src={menu} alt="Logo" /><p><Link to="/">Phonebook</Link></p>
      </div>
      <div className='main-content'>
        <div className='sidebar-area'>
          <ul>
            {/* <li>
              <Link to="/">Home</Link>
            </li> */}
            <li>
              <Link to="/create-user" className={styles.linkBtn} underline="none">Create new Contact </Link>
            </li>
            {/* <li>
              <Link to="/user/:id">User detls</Link>
            </li> */}
          </ul>
        </div>
        <div className='users-area'>
          <div className='search-area'>
            <form onSubmit={() => console.log("a")}>

              <TextField
                id="filled-search"
                type='search'
                variant="standard"
                onChange={e => { searchUsers(e) }}

                label="Search in your Contacts"
              />

            </form>
          </div>
          {
            loading ? users.map((user) => {
              return (
                <UsersItem
                  key={user.id}
                  user={user}
                  remove={removeItem}

                />
              )
            }) : <p>Loading...</p>
            }

        </div>
      </div>



    </div>
  )
}

export default UsersList;

