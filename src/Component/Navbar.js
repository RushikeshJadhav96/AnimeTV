import { makeStyles } from "@material-ui/styles";
import React from "react";
import { Link } from "react-router-dom";
import Logo from "../Asstets/logo.png";

const useStyle = makeStyles(()=>({
  
}));
function Navbar() {

  const classes = useStyle();

  return (
    <div>
      <img src={Logo} />
      <ul className={classes.Ul}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="movies">Movies</Link>
        </li>
        <li>
          <Link to="tv-series">TV-Series</Link>
        </li>
        <li>
          <Link to="mylist">MyList</Link>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
