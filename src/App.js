import Home from "./pages/Home";
// context
import ColorContext from "./context/ColorContext";

function App() {

  // variable
  const color = "red";

  return (
    <ColorContext.Provider value={ color }>
      <div>
        <Home />
      </div>
    </ColorContext.Provider>
  );
}

export default App;