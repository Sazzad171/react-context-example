import { useState } from "react";

// context
import { AppContext } from "./context/context";

// components
import AddUser from "./components/AddUser";
import UserList from "./components/UserList";

function App() {

  // state
  const [users, setUsers] = useState([{id: 1, name: "sazzad", age: 24, bio: "Engineer"}]);
  const [showEditModal, setShowUserModal] = useState(false);

  // user event function
  const dispatchUserEvent = (actionType, payload) => {
    switch(actionType) {
      case 'Remover_user':
        setUsers(users.filter( user => user.id !== payload.userId));
        return;
      default:
        return;
    }
  }

  return (
    <AppContext.Provider value={{ users, showEditModal, setShowUserModal, dispatchUserEvent }}>
      <AddUser />
      <UserList />
    </AppContext.Provider>
  );
}

export default App;
