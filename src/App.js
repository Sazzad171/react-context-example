import { useState } from "react";

// context
import { AppContext } from "./context/context";

// components
import AddUser from "./components/AddUser";
import UserList from "./components/UserList";

function App() {

  // state
  const [users, setUsers] = useState([{id: 1, name: "sazzad", age: 24, bio: "Engineer"}]);

  return (
    <AppContext.Provider value={{ users }}>
      <AddUser />
      <UserList />
    </AppContext.Provider>
  );
}

export default App;
