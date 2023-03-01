import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";
import Riddles from "./Riddles";

function App() {
  const [riddleData, setRiddleData] = useState([]);
  const [apiKey, setApiKey] = useState(
    "tafVIHi3FG9V4fEJL1gTvw==2D3nPG0px2ffwMnT"
  );

  const apiUrl = "https://api.api-ninjas.com/v1/riddles?limit=1";

  useEffect(() => {
    getRiddle();
  }, []);

  const options = {
    method: "GET",
    headers: {
      "X-Api-Key": apiKey,
    },
  };

  const getRiddle = async () => {
    try {
      const response = await axios.get(apiUrl, options);
      const result = await response.data;
      setRiddleData(result);
    } catch (error) {
      console.error(error);
    }
  };
  console.log(riddleData);

  return (
    <div className="App">
      <Riddles riddleData={riddleData} />
    </div>
  );
}

export default App;
