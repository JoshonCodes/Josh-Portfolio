import { useState } from "react";
// import logo from "./logo.svg";
// import "./index.css";
import "./App.css";
import Home from "./Features/Home";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className='App'>
      <Home />
    </div>
  );
}

export default App;
