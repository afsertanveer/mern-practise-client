import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';

const Update = () => {
    const storedUser = useLoaderData();
    const [user,setUser] = useState(storedUser);
    const handleUpdateUser = event =>{
        event.preventDefault();
       fetch(`http://localhost:5000/users/${storedUser._id}`,{
            method:'PUT',
            headers:{
                'content-type':'application/json',
            },
            body:JSON.stringify(user)
       })
       .then(res=>res.json())
       .then(data=>{
        if( data.modifiedCount>0){
            alert("User is Updated");
        }
       })

    }
    
    const handleInputChange = event =>{
        const value = event.target.value;
        const field = event.target.name;
        const newUser = {...user};
        newUser[field] = value;
        setUser(newUser);
    }
    return (
        <div>
            <h2>Please Update: {storedUser.name} </h2>
            <form onSubmit={handleUpdateUser}> 
                <input onChange={handleInputChange} type="text" defaultValue={storedUser.name} name="name" id=""  placeholder='name' required /><br />
                <input onChange={handleInputChange} type="text" defaultValue={storedUser.address} name="address" id=""  placeholder='address' required /><br />
                <input type="email" onChange={handleInputChange} defaultValue={storedUser.email} name="email" id="" placeholder='email' required /><br />
                <button type="submit"> Update User</button>
            </form>
        </div>
    );
};

export default Update;