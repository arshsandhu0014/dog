import React from "react";
import { useRouteMatch, Switch, Route, Link } from "react-router-dom";
import { Navbar, Nav, Button } from "react-bootstrap";
export default function Navigationbar() {
  const links = [
    { id: 0, name: "Home", icon: "home", link: "/home" },
    { id: 1, name: "Gallery", icon: "gallery", link: "/" },
    { id: 2, name: "Contact", icon: "contact", link: "/" },
    { id: 3, name: "About", icon: "about", link: "/" },
  ];
  const navs = links.map((item) => (
    <Nav.Link id={item.id}><Link className="text-white " to={item.link}>{item.name}</Link></Nav.Link>
  ));
  return (
    <React.Fragment>
      <Navbar className="navbar-expand-sm" bg="dark" variant="dark">
      
        <Navbar.Brand>
        <img
            alt=""
            src="/logo.png"
            width="30"
            height="30"
            className="d-inline-block align-top"
          />
         Myhomestep
        </Navbar.Brand>
        <Nav className=" col-form-label-sm">{navs}</Nav>
      </Navbar>
    </React.Fragment>
  );
}