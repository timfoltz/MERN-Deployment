import { useState, useEffect } from 'react';
import axios from 'axios'
import {Link} from "@reach/router"


const Pirate = ({id, updateAPI}) =>{

    const [pirate, setPirate] = useState({
        eyePatch: false,
        pegLeg: false,
        hookHand: false,
        createdAt: Date.now(),
        phrase: "",
        image: "",
        position: "",
        chests: 0,
        name: "",
        updatedAt: Date.now()
    });

    useEffect(()=>{
        axios.get(`http://localhost:8088/pirates/${id}`)
            .then(res =>{
                console.log(res);
                setPirate(res.data)
            })
            .catch(err =>{
                console.log(err);
            })
    },[id])

    const checkBoxHandlerEye = (eyePatch,id) => {
        const changedPirate = {...pirate};
        changedPirate.eyePatch = eyePatch;
        setPirate(changedPirate);
        updateAPI({eyePatch: eyePatch},id);
    }
    const checkBoxHandlerPeg = (pegLeg,id) => {
        const changedPirate = {...pirate};
        changedPirate.pegLeg = pegLeg;
        setPirate(changedPirate);
        updateAPI({pegLeg: pegLeg},id);
    }
    const checkBoxHandlerHook = (hookHand,id) => {
        const changedPirate = {...pirate};
        changedPirate.hookHand = hookHand;
        setPirate(changedPirate);
        updateAPI({hookHand: hookHand},id);
    }



    return (
        <div style={{padding: "30px"}}>

            <Link className="links" to="/" >Home</Link><br/>
            <img style={{width:"400px"}} src={`${pirate.image}`} />
            <p>{pirate.name}</p>
            <p>{pirate.phrase}</p>
            <p># of Treasure Chests:<br/>{pirate.chests}</p>
            <p>Eye Patch:<input 
                type="checkbox" 
                checked={pirate.eyePatch}
                onChange={e => checkBoxHandlerEye(e.target.checked, pirate._id)}/>
            </p>
            <p>Peg Leg:<input 
                type="checkbox" 
                checked={pirate.pegLeg}
                onChange={e => checkBoxHandlerPeg(e.target.checked, pirate._id)}/>
            </p>
            <p>Hook Hand:<input 
                type="checkbox" 
                checked={pirate.hookHand}
                onChange={e => checkBoxHandlerHook(e.target.checked, pirate._id)}/>
            </p>



        </div>
    )
}

export default Pirate