import React from "react";
import { useDispatch } from "react-redux";
import { searchDish } from "../../Redux/slices/dishSlice";
import { Link } from "react-router-dom";

function Nav() {
  const dispatch = useDispatch();

  return (
    <>
      <div className="nav">
        <Link to={"/"} className="x">
          <div className="logo">
            <i class="fa-solid fa-burger falo"></i>
            <p>FoodPlanet</p>
          </div>
        </Link>

        <input
          type="text"
          placeholder="Search your favorite cusine"
          className="a"
          onChange={(e) => dispatch(searchDish(e.target.value.toLowerCase()))}
        />
      </div>
    </>
  );
}

export default Nav;
