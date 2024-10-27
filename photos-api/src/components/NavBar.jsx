import React from "react";

function NavBar() {
  return (
    <nav class="navbar navbar-light bg-light">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
          <img
            style={{ marginRight: "1rem" }}
            src="https://creazilla-store.fra1.digitaloceanspaces.com/icons/3253852/google-photos-icon-md.png"
            alt=""
            width="30"
            height="24"
            class="d-inline-block align-text-top"
          />
          Google Photos API
        </a>
      </div>
    </nav>
  );
}

export default NavBar;
