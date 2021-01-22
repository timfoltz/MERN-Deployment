import './App.css';
import { Router } from '@reach/router'
import {useState, useEffect} from 'react'
import axios from 'axios'
import List from './views/List';
import Create from './views/Create';
import Pirate from './views/Pirate';



function App() {

const [pirates, setPirates] = useState([])


  useEffect(()=>{

    axios.get('http://localhost:8088/pirates')
      .then(res =>{
        setPirates(res.data)
      })
      .catch(err =>{
      });
  }, [])

  const addPirate = (pirate) => {
    setPirates([...pirates,pirate])
  }
  
  const updatePirate = (changedPirate, id) => {
    setPirates( pirates.map(pirate => {
      if(pirate._id === id){
        return changedPirate;
      }
      return pirate;
    }))
  }

  const deletePirate =(id) => {
    const changedPirates = pirates.filter((pirate) => {
      if(pirate._id === id){
        return false;
      }
      return true;
    })
    setPirates(changedPirates)

  }

  const updateAPI = (data,id) => {
    axios.put(`http://localhost:8088/pirates/${id}`,data)
    .then(res =>{
      console.log(res);
      updatePirate(res.data, id);
    })
    .catch(err => {
      console.log(err)
    })
  };

  const deleteAPI = (id) => {
    axios.delete(`http://localhost:8088/pirates/${id}`)
    .then(res => {
      console.log(res)
      deletePirate(id)
    })
    .catch(err =>{
      console.log(err)
    })
  }


  return (
    <div className="App">
      <div>
        <Router>
          <List path="/" 
            pirates={pirates} 
            updateAPI={updateAPI}
            deleteAPI={deleteAPI}/>
          <Create path="/new" addPirate={addPirate}/>
          <Pirate path="/show/:id" updateAPI={updateAPI}/>
        </Router>

        
      </div>



    </div>
  );
}

export default App;
