import { useState } from "react";
import "./App.css";

function App() {
  const [list, setList] = useState(["hamburger","spinat"]);
  const [newItem, setNewItem] = useState(''); //input-felt

  function handleItem(){
    setList([...list, newItem]);
    setNewItem('');
  }
  const handleDelete = (deletingItem) => {
    const newList = list.filter((i) => i !== deletingItem);
    setList(newList); 
  }

  return (
    <div className="card">
      <h1>Her er fryseren din! 👋</h1>
      <p className="kursiv">
        Du har {list.length} varer i fryseren
      </p>
      <ul className="items">
        {list.map((item) => (<li>{item} <button className="button-8" onClick={ () => handleDelete(item)}>Remove</button></li>))}
        </ul>
      <input value={newItem} onChange={(event)=>setNewItem(event.currentTarget.value)} placeholder="fyll inn"></input>
      <button onClick={handleItem} className="button-8">
        Add item
      </button>
      
      {/* <p>
        Du kan se koden for dette prosjektet{" "}
        <a href="https://github.com/bekk/flyt">i repoet på GitHub</a>
      </p>
      <p>
        Du kan endre koden i <code>src/App.jsx</code>
      </p> */}
    </div>
  );
}

export default App;
