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
  const [editId, setEditId] = useState(null);

  // user event function
  const dispatchUserEvent = (actionType, payload) => {
    switch(actionType) {
      case 'Add_user':
        setUsers([...users, payload]);
        return;
      case 'Remover_user':
        setUsers(users.filter( user => user.id !== payload.userId));
        return;
      case 'Edit_user':
        setUsers(
          users.map((user) => (
            user.id === payload.id ? { ...user, name: payload.name, age: payload.age, bio: payload.bio } : user
          ))
        )
        return;
      default:
        return;
    }
  }

  return (
    <AppContext.Provider value={{ users, showEditModal, setShowUserModal, dispatchUserEvent, editId, setEditId }}>
      <AddUser />
      <UserList />
    </AppContext.Provider>
  );
}

export default App;
