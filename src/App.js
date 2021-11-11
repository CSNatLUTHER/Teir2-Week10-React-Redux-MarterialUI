import './App.css';
import { TextField, Button, Select, MenuItem, InputLabel } from '@material-ui/core';
import {useState} from 'react'



function App() {

  const getName = (event) => {
    console.log(event.target.value);
  }
  
  const getSize = (event) => {
    console.log('in getSize', event.target.value );
    setSize(event.target.value)
  }

  const [size, setSize ] = useState ('small');

  return (
    <div className="App">
      <h1>Material UI Intro</h1>
      <br></br>
      <input type="text" placeholder ="oldSchool" onChange={ (event ) => getName (event )} ></input>
      <br></br>
      <TextField placeholder ="newSchool" onChange={ (event ) => getName (event )} ></TextField>
      <br></br>
      <br></br>
      <br></br>
      <button>oldSchool</button><p>   </p>
      <Button>newSchool</Button>
      <br></br>
      <br></br>
      <br></br>
      <InputLabel>Select Size</InputLabel>
      <Select
        value={size}
        onChange={getSize}
      >
        <MenuItem value="tiny"> Tiny </MenuItem>
        <MenuItem value="small"> Small </MenuItem>
        <MenuItem value="medium"> Medium </MenuItem>
        <MenuItem value="large"> Large </MenuItem>
      </Select>
    </div>
  );
}

export default App;
