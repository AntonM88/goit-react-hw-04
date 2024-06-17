import { useState, useEffect } from "react";
import { ContactList, SearchBox, ContactForm } from "./components";
import { nanoid } from "nanoid";
const userData = [
  { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
  { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
  { id: "id-3", name: "Eden Clements", number: "645-17-79" },
  { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
];

const App = () => {
  const [users, setUsers] = useState(() => {
    const savedUsers = JSON.parse(localStorage.getItem("users"));
    return savedUsers || userData;
  });

  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(users));
  }, [users]);

  const [searchValue, setSearchValue] = useState("");

  const createUser = (name, number) => {
    const newUser = { id: nanoid(), name, number };
    setUsers((prev) => [...prev, newUser]);
  };

  const handleDeleteUser = (id) => {
    setUsers((prev) => prev.filter((item) => item.id !== id));
  };

  const getFileredData = () => {
    return users.filter((item) =>
      item.name.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())
    );
  };

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm createUser={createUser} />
      <SearchBox searchValue={searchValue} setSearchValue={setSearchValue} />
      <ContactList
        users={getFileredData()}
        handleDeleteUser={handleDeleteUser}
      />
    </div>
  );
};

export default App;
