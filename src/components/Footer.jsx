import React from "react";

function Footer() {
  return (
    <>
      <div className="footer">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Phone</li>
          <li>Contacts</li>
        </ul>

        <ul>
          <li>Places</li>
          <li>Chefs</li>
          <li>Rate</li>
          <li>Dishes</li>
        </ul>

        <ul>
          <li>Cusines</li>
          <li>Food</li>
          <li>Drinks</li>
          <li>Best Dishes</li>
        </ul>

        <ul className="bra">
          <li>
            <i class="fa-brands fa-facebook"></i>
          </li>
          <li>
            <i class="fa-brands fa-instagram"></i>
          </li>
          <li>
            <i class="fa-brands fa-twitter"></i>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Footer;
