import { useState, useEffect } from 'react';
import axios from 'axios'
import { Link } from '@reach/router';




const List = ({pirates, updateAPI, deleteAPI}) =>{

    const checkBoxHandlerEye = (eyePatch,id) => {
        updateAPI({eyePatch: eyePatch},id)
    }
    const checkBoxHandlerPeg = (pegLeg,id) => {
        updateAPI({pegLeg: pegLeg},id)
    }
    const checkBoxHandlerHook = (hookHand,id) => {
        updateAPI({hookHand: hookHand},id)
    }

    return (
        <div style={{textAlign:"center", padding:"30px"}}>
            <Link to="/new" className="links"><button type="button">Add Pirate</button></Link>
                {
            pirates.sort((a,b) => a.name.toUpperCase() > b.name.toUpperCase() ? 1:-1).map((pirate,idx) =>
                <div key={idx} >
                    <h3>{pirate.name}</h3>
                    <Link to={`/show/${pirate._id}`}><button type="button">View Pirate</button></Link>
                    <br/>
                    <img alt="" style={{width:"100px"}} src={`${pirate.image}`} /> 
                    <p>Peg Leg:
                        <input 
                        type="checkbox" 
                        checked={pirate.pegLeg} 
                        onChange={e =>checkBoxHandlerPeg(e.target.checked,pirate._id)} />
                    </p>
                    <p>Eye Patch:
                        <input 
                        type="checkbox" 
                        checked={pirate.eyePatch} 
                        onChange={e =>checkBoxHandlerEye(e.target.checked,pirate._id)} />
                    </p>
                    <p>Hook Hand:
                        <input 
                        type="checkbox" 
                        checked={pirate.hookHand} 
                        onChange={e =>checkBoxHandlerHook(e.target.checked,pirate._id)} />
                    </p>
                    <p># of Treasure Chests:{pirate.chests}</p>
                    <p>{pirate.phrase}</p>
                    <p>{pirate.position}</p>
                    <button onClick={e => deleteAPI(pirate._id)}>Walk the Plank</button>
                </div>
            )
            }


        </div>
    )
}

export default List