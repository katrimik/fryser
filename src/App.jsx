import { useState } from "react";
import "./App.css";

function App() {
  const [list, setList] = useState(["hamburger","spinat"]);
  const [newItem, setNewItem] = useState(''); //input-felt
  

  function handleItem(){
    setList([...list, newItem]);
    setNewItem('');
  }

  return (
    <div className="card">
      <h1>Her er fryseren din! 👋</h1>
      <p>
        Du har {list.length} varer i fryseren
      </p>
      <ul>{list.map((item) => (<li>{item}</li>))}</ul>
      <input value={newItem} onChange={(event)=>setNewItem(event.currentTarget.value)} placeholder="fyll inn"></input>
      <button onClick={handleItem}>
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
