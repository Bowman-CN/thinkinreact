import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./header.less";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faNewspaper } from "@fortawesome/free-solid-svg-icons";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";

class Header extends Component {
  render() {
    return (
      <div style={{ marginBottom: "66px" }}>
        <Navbar
          color="light"
          className="shadow fixed-top"
          light
          expand="md"
        >
          <NavbarBrand href="#">Paperboy</NavbarBrand>
          <NavbarToggler />
          <Collapse navbar>
            <Nav className="ml-auto" navbar>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav>
                  <FontAwesomeIcon icon={faNewspaper} size="2x" />
                </DropdownToggle>
                <DropdownMenu right>
                  <Link to="/hot" className="dropdown-item">
                    Home
                  </Link>
                  <DropdownItem divider />
                  <Link to="/prefs" className="dropdown-item">
                    Preferences
                  </Link>
                  <DropdownItem divider />
                  <Link to="/login" className="dropdown-item">
                    Login
                  </Link>
                  {/* <DropdownItem>Option 1</DropdownItem> */}
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default Header;
