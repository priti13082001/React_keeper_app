import React from "react";

const date = new Date();
const y = date.getFullYear();
function Footer() {
  return (
    <footer>
      <p> copyright @ {y}</p>
    </footer>
  );
}
export default Footer;
