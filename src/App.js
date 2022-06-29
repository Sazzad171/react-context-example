import Home from "./pages/Home";
// context
import ColorContext from "./context/ColorContext";
import { useState } from "react";

function App() {

  // variable
  const [color] = useState("red");

  return (
    <ColorContext.Provider value={ color }>
      <div>
        <Home />
      </div>
    </ColorContext.Provider>
  );
}

export default App;