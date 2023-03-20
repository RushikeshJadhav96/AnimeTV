import { makeStyles } from "@material-ui/styles";
import React from "react";
import { Link } from "react-router-dom";
import Logo from "../Asstets/logo.png";

const useStyle = makeStyles(()=>({
  navbar:{
    backgroundColor:'rgb(0,0,0,0.5)',
    display:'flex',
    padding:'0px 60px',
    alignItems:'center'
  },
  logoMain:{
    padding:'10px',
    // backgroundColor:'red'
  },
  Ul:{
    listStyle:'none',
    display:'flex'
  },
  navname:{
    textDecoration:'none',
    margin:'0px 10px',
    color:'#ffff',
  },
  // navname:hover{
  //   color:'#000'
  // },
}));
function Navbar() {

  const classes = useStyle();

  return (
    <div >
      <div className={classes.navbar}>
      <img src={Logo}  className={classes.logoMain}/>
      <ul className={classes.Ul}>
        <li>
          <Link to="/"  className={classes.navname}>Home</Link>
        </li>
        <li className={classes.navname}>
          <Link to="movies" className={classes.navname}>Movies</Link>
        </li>
        <li className={classes.navname}>
          <Link to="tv-series" className={classes.navname}>TV-Series</Link>
        </li>
        <li className={classes.navname}> 
          <Link to="mylist" className={classes.navname}>MyList</Link>
        </li>
      </ul>

      </div>

      {/* Image Slider  */}
    </div>
  );
}

export default Navbar;
