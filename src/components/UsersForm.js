import React, {useState} from 'react';


export default function UsersForm(props, {create}) {

  const [newName, setNewName] = useState('')

  const addNewUser = (e) => {
    e.preventDefault();

    const newUser = {
      newName,
      //email,
      id:Math.random(),

    }

    console.log(newUser);
    create(newUser);
    setNewName('')

  }


  return (
    <form>
        <input 
              type="text" 
              placeholder="Search in your Contacts" 
              //onChange = {e =>{ setUsers(e.target.value)}}
            />
            
    </form>
  )
}
