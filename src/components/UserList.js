import { memo } from "react";
import "../styles/UserList.css"
const UserList = ({users}) => {

  if (users.length === 0) return <></>;

  return (
    <div className="user-list-container">
      <h2 className="text-decoration-heading">
        List of users
      </h2>
      <div className="list-of-users">
        <ul>
        {users.map((user, i) => (
           <Name user={user} key={i} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export const Name = memo(({ user }) => {
  return <li>{user.name}</li>;
});

export default UserList;
