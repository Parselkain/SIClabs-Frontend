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
      .get("http://localhost:3001/api/data")
      .then((response) => {
        setData(response.data);
      })
      .catch(() => {});
  }, []);

  return (
    <div className="App">
      <h1>Lista dei Titoli</h1>
      <ul>
        {data.map((item, index) => (
          <li key={index}>{item.titolo}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
