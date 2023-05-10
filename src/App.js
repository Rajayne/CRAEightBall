import "./App.css";
import EightBall from "./EightBall";
import answers from "./answers";

function App() {
  return (
    <div className="App">
      <header className="App-header">Magic Eight Ball</header>
      <EightBall answers={answers} />
    </div>
  );
}

export default App;
