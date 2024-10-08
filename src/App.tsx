import React, { useEffect, useState } from "react";
import axios from "axios";

interface DataItem {
  titolo: string;
}

const App: React.FC = () => {
  const [data, setData] = useState<DataItem[]>([]);

  useEffect(() => {
    // Effettua la chiamata API
    axios
      .get("https://siclabs-backend.onrender.com/api/data")
      .then((response) => {
        setData(response.data);
      })
      .catch(() => {});
  }, []);

  return (
    <div className="App">
      <h1>
        Se qui sotto c'è una scritta, la chiamata a BE è andata a buon fine
      </h1>
      <ul>
        {data.map((item, index) => (
          <li key={index}>{item.titolo}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
