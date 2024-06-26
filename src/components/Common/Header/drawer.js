import * as React from "react";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import Button from "../Button";
import { Drawer } from "@mui/material";
import { useState } from "react";
import "./styles.css";
import { Link } from "react-router-dom";
// import Button from '@mui/material/Button';
export default function AnchorTemporaryDrawer() {
  const [open, notOpen] = useState(false);
  return (
    <div>
      <button
        onClick={() => notOpen(true)}
        className="links"
        style={{
          backgroundColor: "transparent",
          border: "none",
          outline: "none",
        }}
      >
        <MenuRoundedIcon className="links" />
      </button>
      <Drawer anchor="right" open={open} onClose={() => notOpen(false)}>
        <div className="containerMobile">
          <Link to="/">
            {" "}
            <p className="links">Home</p>
          </Link>
          <Link to="/story">
            {" "}
            <p className="links">Story</p>
          </Link>
        
          <Link to="/works">
            {" "}
            <p className="links">Works</p>
          </Link>
          <Link to="/books">
            {" "}
            <p className="links">Books</p>
          </Link>
          {/* <a href='/'>      <p className='links'>Dashboard</p></a> */}
          <Link to="/login">
            <Button
              text="Login"
              onClick={() => console.log("Button Clicked")}
            ></Button>
          </Link>
        </div>
      </Drawer>
    </div>
  );
}
