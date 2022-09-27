import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Button from './utils/components/cusButton';

function App() {
  let [txt, setTxt] = useState("")
  // let [value, setValue] = useState("")
  // let [titleBut, setTitleBut] = useState('add')
  let [selected, setSelected] = useState(null)
  let [list, setList] = useState([
    "to study react introduction and working flow by 11:00 A.M. after breakfast",
    "to start making assignmet by 12:00 P.M.",
    "Practice javascript by online assesment test",
  ])

  function add() {
    if (!txt) {
      alert('text is required')
      return
    }
    list.push(txt)
    console.log(list)
    // setList(list) throw error
    setList([...list])
  }
  function deleteAll() {
    setList([])
  }
  function deleteId(id) {
    setList([...list.filter((e, i) => i !== id)])

  }
  function editId(obj) {
    setSelected({ ...obj })
    setTxt(obj.text)
  }
  function update() {
    let copy = [...list]
    copy.splice(selected.i, 1, txt)
    setList([...copy])
    setTxt('')
    }
  function cancel(){
    setSelected(null)
    setTxt('')
  }
  const isUpdate = !!selected
  return (
    <div className="App">
      <header className="App-header">
        <input
          onChange={(e) => {
            setTxt(e.target.value)
            console.log(txt)
          }}
          value={txt}
        />
        <Button style={{ margin: 8 }} titleBut={isUpdate ? "update" : 'add'} click={isUpdate ? update : add} />
        {isUpdate &&
          <Button style={{ margin: 8 }} titleBut={'cancel'} click={cancel} />
        }
        <Button style={{ margin: 8 }} titleBut={'delete all'} click={deleteAll} />

        <ul style={{ flexDirection: 'row', padding: 8 }}>{
          list.map((e, i) => {
            return <li
              style={{
                color: 'white',
                backgroundColor: 'grey',
                margin: 6,
                minWidth: 200,
                display: 'flex',
                justifyContent: 'space-between',
                padding: 12,
              }}
              key={i}
            >
              <div style={{
                flex: 1,
                // backgroundColor: 'red',
                width: '50%',
                textAlign: 'left',
                flexWrap: 'wrap'
              }}
              >
                {e}
              </div>
              <div style={{  display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                <Button
                  titleBut={'edit'}
                  click={() => { editId({ text: e, i }) }}
                />
                <Button
                  titleBut={'delete'}
                  click={() => {
                    deleteId(i)
                  }}
                />
              </div>
            </li>
          })}
        </ul>

      </header>
    </div>
  );
}

// .btn {
//   backgroundColor

// }

export default App;


