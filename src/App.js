import React, { useState } from 'react';
import List from "./components/List";
import 'bootstrap/dist/css/bootstrap.css';
import './App.css'

function App() {
  const [list, setList] =useState([
      {value:"workout", isChecked: false},
      {value:"algorithms", isChecked: false},
      {value: "lecture", isChecked: false},
    ]);
  const [form, setForm] = useState()


  const onSubmitHandler = (e, value) => {
    e.preventDefault();
    let newItem = {value: `${form}`, isChecked: false}
    setList([...list, newItem]);
    setForm("")
  }

  return (
    <div className="App">
      <h1>To Do List:</h1>
      <form onSubmit = { onSubmitHandler} >
        <label>Add to List:</label>
        <input className= "inputBox" type="text" onChange={ (e) => setForm(e.target.value)} value={form}></input>
        <input type="submit" value="Add"></input>
      </form>
      <List list= {list} setList={setList}></List>
    </div>
  );
}

export default App;
