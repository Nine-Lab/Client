import React from "react";
// import SignUp from "../auth/SignUp"
// import Login from "../auth/Login"
// import Review from "../page/Review"
// import Profile from "../page/Profile"

function Header() {
  return (
    <header>

      <nav>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="signup">Signup</a></li>
          <li><a href="login">Login</a></li>
          <li><a href="review">Review</a></li>
          <li><a href="profile">Profile</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;