import React, { useState } from "react";
import { auth, provider } from "../../firebase";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { NavbarData } from "./NavbarData";
import { useAuthState } from "react-firebase-hooks/auth";

function Navbar() {
  const logout = () => {
    console.log("clicked");
    auth.signOut().catch((error) => {
      console.log(error);
    });
  };
  const [user, userLoading] = useAuthState(auth);

  const [sidebar, setSidebar] = useState(false);

  const showSideBar = () => setSidebar(!sidebar);

  return (
    <nav className="Navbar">
      <h1 className="titleText">
        <span className="bold">chess</span>tracker
      </h1>

      <ul className={sidebar ? "navOptions mobile" : "navOptions"}>
        {NavbarData.map((value, index) => {
          return (
            <li className="navLinks" key={index}>
              <Link to={value.path} style={{ textDecoration: "none" }}>
                <h1 className="navLinkText" onClick={showSideBar}>
                  {value.title}
                </h1>
              </Link>
            </li>
          );
        })}
        <li className="navLinks" onClick={logout}>
          <h1 className="navLinkText">Log Out</h1>
        </li>
      </ul>
      <div className="profile">
        <h1>{user.displayName}</h1>
      </div>
      <div className="menu" onClick={showSideBar}>
        <div className={sidebar ? "line1 cross" : "line1"}></div>
        <div className={sidebar ? "line2 cross" : "line2"}></div>
        <div className={sidebar ? "line3 cross" : "line3"}></div>
      </div>
    </nav>
  );
}

export default Navbar;
