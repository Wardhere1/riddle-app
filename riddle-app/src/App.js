import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";
import Riddles from "./Riddles";

function App() {
  const [riddleData, setRiddleData] = useState([]);
  const [apiKey, setApiKey] = useState(
    "tafVIHi3FG9V4fEJL1gTvw==2D3nPG0px2ffwMnT"
  );
  const [background, setBackground] = useState("");
  const [next, setNext] = useState(0);

  const apiUrl = "https://api.api-ninjas.com/v1/riddles?limit=1";

  const options = {
    method: "GET",
    headers: {
      "X-Api-Key": apiKey,
    },
  };

  useEffect(() => {
    const getRiddle = async () => {
      try {
        const response = await axios.get(apiUrl, options);
        const result = await response.data;
        setRiddleData(result);
      } catch (error) {
        console.error(error);
      }
    };
    getRiddle();
  }, [next]);


  return (
    <div className="App">
      <Riddles  next={next} setNext={setNext} setBackground={setBackground} background={background} riddleData={riddleData} />
    </div>
  );
}

export default App;
