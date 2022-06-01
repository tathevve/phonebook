import React from 'react';
import { useHistory } from "react-router-dom";
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    backgroundColor: 'red',
    color: 'white',
    '&:hover': {
     backgroundColor:'green' 
    }
  },
}));


function UsersItem(props) {

    const history =  useHistory();

    const styles = useStyles()

    const handleRedirect = (id) => {
        history.push(`/user/${id}`)
    }



  return (
    <div className='container'>
        <div className='user'>
            {props.user.name} <br/>
            {props.user.email}
        </div>
        <Button  variant='outlined' className='Button' onClick={() => handleRedirect(props.user.id)}>Info</Button>
        <Button variant='outlined' className={styles.root}  startIcon={<DeleteIcon />} onClick={()=>{props.remove(props.user)}}>Delete</Button>
           
    </div>
  )
}

export default UsersItem