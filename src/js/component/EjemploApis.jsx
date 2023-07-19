import React, { useState, useEffect } from "react";
import { TodoList } from "./TodoList";

export const EjemploApis = () => {
    const [users, setUsers] = useState([]);
    const [errores, setErrores] = useState("");
    const host = "https://jsonplaceholder.typicode.com/";

    const getUsers = async  () => {
        console.log(host);

        const response = await fetch ("https://jsonplaceholder.typicode.com/users")
          console.log(response);
        if (response.ok) {
            const data = await response.json()
            console.log(data);
            setUsers(data);

        }  else {
            console.log("error: ", response.status, response.statusText);
            setErrores("error: " + response.status + " " + response.statusText);
        }

    }

    useEffect(() => {
        getUsers();
    }, [])

   

    return (
  <>
    <h1 className= "text-primary"> Nombres de Usuarios</h1>
<hr></hr>
    {errores ? <p>{errores}</p> :

    <ul > 
        { users.map( (user, index) => { 
            return <li key={index}><strong>{user.id}</strong> - {user.name} - {user.company.name},<straong>website:{user.website}</straong></li>
        })}
       
    </ul>
    }
    <hr></hr>
    <TodoList/>
   </>

    )

}


