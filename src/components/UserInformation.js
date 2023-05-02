import { useEffect } from "react";
import "../styles/UserInformation.css"

let renderCount = 1;

const UserInformation = ({ age }) => {
  
  useEffect(() => renderCount++);
  
  if (!age) return <></>;

  return (
    <div className="user-information-container">
      {age < 18?
        <span className="span-highlight">
          You are too young to be our employee
        </span>
        : (
          <span >You are old enough :)</span>
        )}
      <small> ({renderCount}) </small>
    </div>
  );
};

export default UserInformation;
