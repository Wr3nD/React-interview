import { useState } from "react";
import UserInformation from "./UserInformation";
import "../styles/AddNewUser.css"

 const AddNewUser = ({users,setUsers}) => {
  const [age, setAge] = useState("");
  const [newName, setName] = useState("");

  const submitForm = (name) => {
    alert("Submiting form for " + name);
    const updateUsers = [...users]
    updateUsers[users.length - 1].name += " (*)"; // mark the previous employee
    updateUsers.push({ name: name });
    setUsers(updateUsers);
  };

    const submit = (e) => {
      e.preventDefault();
    if(!newName || !age){
      alert("Please enter a name and age");
    }
    else if (age < 18) {
      alert("You are not old enough to be our employee");
    } else {
      submitForm(newName);
      
      setName("");
      setAge("");
    }
  };

  return (
    <div className="add-user-container">
       <form onSubmit={submit}>

      <input
        type="text"
        value={newName}
        onChange={(d) => setName(d.target.value)}
        placeholder="Type your name"
        className="input"
        />
      <input
        type="number"
        value={age}
        onChange={(d) => setAge(d.target.value)}
        placeholder="Type your age"
        className="input"
        />
      <button className="btn" type="submit">Submit form</button>
        </form>
      <UserInformation age={age} />
    </div>
  );
};
export default AddNewUser