import logo from "./logo.svg";
import "./App.scss";
// import MyComponent from "./Example/MyComponent";
// import ListTodo from "./Todos/ListTodo";
import Game from "./Games/Game";
function App() {
  // const App = () =>{
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p className="Name">TIC-TAC-TOE</p>
        <Game />
      </header>
    </div>
  );
}

export default App;
