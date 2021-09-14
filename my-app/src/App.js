import logo from './logo.svg';
import './App.css';
import {db} from './firebaseconf'
function App() {
  const usuario = {
    nombre:'Mati',
    edad:23,
  }
  const setUsuario = async (e) =>{
    db.collection("users").add(usuario)
  .then((docRef) => {
      console.log("Document written with ID: ", docRef.id);
  })
  .catch((error) => {
      console.error("Error adding document: ", error);
  });
  
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <button onClick={(e) =>{setUsuario(e)}}>ENVIAR</button>
      </header>
    </div>
  );
}

export default App;
