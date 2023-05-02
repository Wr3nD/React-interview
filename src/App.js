import {useEffect, useState} from "react";
import  AddNewUser  from "./components/AddNewUser";
import Header from "./components/Header";
import UserList from "./components/UserList";
import "./index.css";

export default function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("https://jsonplaceholder.typicode.com/users");
      const data = await response.json();
      setUsers(data);
    };
    fetchData();
  }, []);

  return (
    <div className="app">
       <div>
        <Header users={users}/>
      </div>
      <div>
        <AddNewUser users={users} setUsers={setUsers}/>
      </div>
      <div>
        <UserList users={users}/>
      </div> 
    </div>
  );
}
