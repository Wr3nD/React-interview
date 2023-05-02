import "../styles/Header.css"

const Header = ({users}) => {
  if (users.length === 0) return <></>;

  return (
    <div className="highlight-container">
      Last employee is{" "}
      <strong>{users[users.length - 1]?.name}</strong>
    </div>
  );
};

export default Header;