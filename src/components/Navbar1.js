import React from "react";
import { BsDiscord } from "react-icons/bs";
import {Link} from "react-router-dom";
import {Navbar, NavbarBrand} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Navbar1=()=>{
    return(
      <Navbar
      className="my-2"
      color="dark"
      dark
    >
      <NavbarBrand href="/">
        <Link to="/">
        <BsDiscord className="mx-2"/>
          Users
        </Link>
      </NavbarBrand>
    </Navbar>
    )
}

export default Navbar1;