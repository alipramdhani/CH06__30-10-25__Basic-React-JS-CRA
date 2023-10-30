import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>test</h1>
      <Menu /> {/*manggil komponen*/}
    </div>
  );
}

function Menu() {
  return (
    <div className="Menu">
      <ul>
        <li>
          <a href="" target="_blank">
            Dashboard
          </a>
        </li>
        <li>
          <a href="" target="_blank">
            AboutMe
          </a>
        </li>
        <li>
          <a href="" target="_blank">
            Login
          </a>
        </li>
      </ul>
    </div>
  );
}

export default App;
