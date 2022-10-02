import { SetStateAction, useState } from "react";
import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { InfoPage } from "./pages/InfoPage";

function App() {
  const [isClicked, setClicked] = useState(false);

  return (
    <div className="App">
      <Routes>
        <Route
          path="/solar-seekers-nasa-space-app-challenge"
          element={<Navigate to="/homepage" />}
        />
        <Route index element={<Navigate to="/homepage" />} />
        <Route
          path="/homepage"
          element={<HomePage isClicked={isClicked} setClicked={setClicked} />}
        />
        <Route
          path="/infopage"
          element={<InfoPage isClicked={isClicked} setClicked={setClicked} />}
        />
      </Routes>
    </div>
  );
}

export default App;
