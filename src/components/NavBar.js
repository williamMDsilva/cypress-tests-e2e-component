import React from "react";

function NavBar({ onLogout }) {
  return (
    <div className="Navbar">
      <input
        data-cy="logout"
        type="submit"
        value="Deslogar"
        onClick={onLogout}
      />
    </div>
  );
}

export default NavBar;
