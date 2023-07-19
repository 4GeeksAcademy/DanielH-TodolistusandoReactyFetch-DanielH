import React, {useState, useEffect} from "react";


export const TodoList = () =>{
    const [todos, setTodos] = useState([]);
    const [errores, setErrores] = useState("");
    const host = "https://jsonplaceholder.typicode.com/";

    const fetchTodo = async  () => {
        console.log(host);
        const url = host + "todos/";
        const request={
            method: "GET"
        }

        const responses = await fetch (url, request)
          console.log(responses);
        if (responses.ok) {
            const data = await responses.json()
            console.log(data);
            setTodos(data);

        }  else {
            console.log("error: ", responses.status, responses.statusText);
            setErrores("error: " + responses.status + " " + responses.statusText);
        }

    }
    useEffect(() => {
        fetchTodo();
    }, [])

    console.log(todos.completed)

    return (
<>
        <h1 className= "text-primary"> Todos </h1>
<hr></hr>
    {errores ? <p>{errores}</p> :

    <ul > 
        { todos.map( (todo, index) => { 
            return <li key={index}><strong>{todo.id}</strong> - {todo.title} </li>
        })}
       
    </ul>
    }
            
        </>
        
    );
};