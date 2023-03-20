import React, { useState } from 'react';

const AddUser = () => {

    const [user,setUser] = useState({name:'default',email:'de@gmail.com'});
    const handleAddUser = event =>{
        event.preventDefault();
        fetch("http://localhost:5000/users",{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(user)
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.acknowledged){
                alert('User Addes Succesfully');
            }
        })

    }
    
    const handleInputBlur = event =>{
        const value = event.target.value;
        const field = event.target.name;
        const newUser = {...user};
        newUser[field] = value;
        setUser(newUser);
    }
    return (
        <div>
            <h2>Please Add a new user</h2>
            <form onSubmit={handleAddUser}> 
                <input onChange={handleInputBlur} type="text" name="name" id=""  placeholder='name' required /><br />
                <input onChange={handleInputBlur} type="text" name="address" id=""  placeholder='address' required /><br />
                <input type="email" onChange={handleInputBlur} name="email" id="" placeholder='email' required /><br />
                <button type="submit"> Add User</button>
            </form>
        </div>
    );
};

export default AddUser;