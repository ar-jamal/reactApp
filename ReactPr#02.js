import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Button from './utils/components/cusButton';

function App() {
  let[txt, setTxt] = useState("")
  let [list, setList] = useState([])
  function add() {
    if (!txt) {
    alert('text is required')
    return 
  }
      list.push(txt)
      console.log(list)
      // setList(list)
      setList([...list])

  }
  return (
    <div className="App">
      <header className="App-header">
        <input onChange={(e) => {
          setTxt(e.target.value)
          console.log(txt)
        }}
        />
        {/* <button onClick={add} >Add</button> */}

        <Button btnValue= {'add'} click= {add}/>
        
        <ul>{
          list.map((e,i) => {
            return <li
            style= {{
              color: 'white',
              backgroundColor: 'grey',
              margin: 6,
              // padding: 12
            }} 
            key= {i}
            >
              {/* <Button btnValue={e}/> */}
              {e}
            </li>
          })}</ul>
        
      </header>
    </div>
  );
}

// .btn {
//   backgroundColor

// }

export default App;


