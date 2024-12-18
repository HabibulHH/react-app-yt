import { useState } from 'react';
import './App.css'

function App() {

  
  let [data, setData] = useState("");
  let [items,setItems] = useState([]);
  const handleChange = (e) => {
    setData(e.target.value);
  }

  const handleSave = () => {
      setItems([...items,{
        taskTitle: data,
        status:"pending"
      }]);
      setData("");
  }

  const handleTaskStatus = (index) => {
    setItems(
      items.map((item, i) =>
        i === index ? { ...item, state: item.state === "pending" ? "completed" : "pending" } : item
      )
    );
  }
  
  return (
    <div className="App">
      <input type="text"
        value={data}
        onChange={handleChange}
      />
      <br />
      <br />
      <button onClick={handleSave} >save</button>
      {
        items.map((item,index) => {
          return <li key={index}
          onClick={() => handleTaskStatus(index)}
          style={{
            textDecoration: item.state === "completed" ? "line-through" : "none",
            cursor: "pointer",
            color: item.state === "completed" ? "green" : "black",
          }}
          >
            {item.taskTitle}</li>
        })
      }
    </div>
  )
}

export default App
