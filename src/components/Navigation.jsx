import React from "react";

export const Navigation = () => {
  return (
    <div>
      <nav>
        <div className="">
          <img src="/images/brand_logo.png" alt="" />
        </div>

        <ul>
          <li>
            <a href="">Menu</a>
          </li>
          <li>
            <a href="">Location</a>
          </li>
          <li>
            <a href="">About</a>
          </li>
          <li>
            <a href="">Contact</a>
          </li>
        </ul>

        <button>Login</button>
      </nav>
    </div>
  );
};
