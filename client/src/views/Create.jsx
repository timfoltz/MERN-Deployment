import { useState, useEffect } from 'react';
import axios from 'axios';
import {Link, navigate} from '@reach/router'



const Create = ({addPirate}) =>{

    const [name,setName] = useState("")
    const [phrase,setPhrase] = useState("")
    const [position,setPosition] = useState("Deck Hand")
    const [hookHand,setHookHand] = useState(true)
    const [pegLeg,setPegLeg] = useState(true)
    const [eyePatch,setEyePatch] = useState(true)
    const [image,setImage] = useState("")
    const [chests,setChests] = useState(0)
    const [errorMessages, setErrorMessagess] = useState([])

    const newPirate ={
        name: name,
        phrase: phrase,
        position: position,
        pegLeg: pegLeg,
        eyePatch: eyePatch,
        hookHand: hookHand,
        image: image,
        chests: chests,
    }


    const formHandler =(e) =>{
        e.preventDefault();
        axios.post("http://localhost:8088/pirates", newPirate)
        .then(res =>{
            console.log(res)
            addPirate(res.data)
            navigate('/')
        })
        .catch(err =>{
            const errors = err.response.data.errors;
            const errorArr=[];
            for(const key of Object.keys(errors)){
                errorArr.push(errors[key].message)
            }
            setErrorMessagess(errorArr)

            console.log(errorArr)

        })
    }

    return (
        <div style={{marginTop:"40px"}}>
            <Link to="/" className="links">Home</Link>
            <form onSubmit={formHandler}>
                {errorMessages.map((error,idx)=><p key={idx} style={{color:"red"}}>{error}</p>)}
                <p>Pirate Name:</p>
                {name.length >0 && name.length <3 ? <p className="errorP">Name Must be at least 3 characters!</p>: ""}
                <input 
                    type="text" 
                    required
                    value={name} 
                    onChange= {e =>setName(e.target.value)}/>
                <p>Pirate Image URL:</p>
                <input 
                    type="text" 
                    required
                    value={image} 
                    onChange= {e => setImage(e.target.value)}/>
                    <br/>
                <p>Crew Position:</p>
                <select 
                    value={position} 
                    required
                    onChange= {e => setPosition(e.target.value)}>
                        <option value="Deck Hand">Deck Hand</option>
                        <option value="Captain">Captain</option>
                        <option value="First Mate">First Mate</option>
                        <option value="Quarter Master">Quarter Master</option>
                        <option value="Boatswain">Boatswain</option>
                        <option value="Powder Monkey">Powder Monkey</option>
                    </select>
                    <br/>
                <p># of Treasure Chests:</p>
                <input 
                    type="number" 
                    required
                    value={chests} 
                    onChange= {e => setChests(e.target.value)}/>
                    <br/>
                <p>Catch Phrase:</p>
                {phrase.length >0 && phrase.length <5 ? <p className="errorP">Phrase Must be at least 5 characters!</p>: ""}

                <input 
                    type="text" 
                    required
                    value={phrase} 
                    onChange= {e => setPhrase(e.target.value)}/>
                    <br/>
                    <p>Peg Leg:
                        <input 
                        type="checkbox" 
                        checked={pegLeg} 
                        onChange={e => setPegLeg(e.target.checked)} />
                    </p>
                    <p>Eye Patch:
                        <input 
                        type="checkbox" 
                        checked={eyePatch} 
                        onChange={e =>setEyePatch(e.target.checked)} />
                    </p>
                    <p>Hook Hand:
                        <input 
                        type="checkbox" 
                        checked={hookHand} 
                        onChange={e =>setHookHand(e.target.checked)} />
                    </p>
                <input type="submit" value="Create"/>
            </form>


        </div>
    )
}

export default Create