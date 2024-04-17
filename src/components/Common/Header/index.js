import React from "react";
import "./styles.css";
import AnchorTemporaryDrawer from "./drawer";
import Button from "../Button";
import { Switch } from "@mui/material";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="navbar">
      <h1 className="logo">
        Raj Balan Legacy<span style={{ color: "var(--blue)" }}>.</span>
      </h1>

      <div className="container">
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
            text={"Login"}
            onClick={() => console.log("Button Clicked")}
          />{" "}
        </Link>
        <Switch defaultChecked />
      </div>
      <div className="modileDrawer">
        <AnchorTemporaryDrawer />
      </div>
    </div>
  );
};

export default Header;
