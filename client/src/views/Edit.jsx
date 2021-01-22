import { useState, useEffect } from 'react';
import axios from 'axios'
import {Link, navigate} from '@reach/router'


const Edit = ({id,updateAPI}) =>{

    const [title,setTitle] = useState("")
    const [desc,setDesc] = useState("")
    const [errorMessages, setErrorMessagess] = useState([])

    useEffect(()=>{
        axios.get(`http://localhost:8088/todos/${id}`)
            .then(res =>{
                console.log(res);
                setTitle(res.data.title)
                setDesc(res.data.desc)
            })
            .catch(err =>{
                console.log(err);
            })
    },[id])

    const formHandler = (e) => {
        e.preventDefault();

        const updatedTodo = {
            title: title,
            desc:desc
        }

        updateAPI(updatedTodo, id);
        navigate("/")
    }


    return (

        <div style={{marginTop:"40px"}}>
        <Link to="/" className="links">Home</Link>
        <Link className="links" to={`/show/${id}`} >Back</Link>

        <form onSubmit={formHandler}>
            {errorMessages.map((error,idx)=><p key={idx} style={{color:"red"}}>{error}</p>)}
            <p>Title:</p>
            {title.length >0 && title.length <3 ? <p className="errorP">Title Must be at least 3 characters!</p>: ""}
            <input 
                type="text" 
                required
                value={title} 
                onChange= {e =>setTitle(e.target.value)}/>
            <p>Description:</p>
            {desc.length >0 && desc.length <5 ? <p className="errorP">Description Must be at least 5 characters!</p>: ""}

            <input 
                type="text" 
                required
                value={desc} 
                onChange= {e => setDesc(e.target.value)}/>
                <br/>
            <input type="submit" value="Create"/>
        </form>


    </div>

        
    )
}


export default Edit