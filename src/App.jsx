import { useEffect } from "react";
import { useState } from "react";
import "./App.scss";
import Joke from "./Components/Joke";

function App() {
  const [jokes, setJokes] = useState([]);

  useEffect(() => {
    fetch("https://v2.jokeapi.dev/joke/Programming?amount=10")
      .then((res) => res.json())
      .then((data) => setJokes(data.jokes));
  }, []);

  return (
    <div className="App">
        <div className="App-header">
      <ul>
        {jokes?.map((c, i) => {
          return <Joke key={i} {...c} />;
        })}
      </ul>
      </div>
    </div>
  );
}

export default App;