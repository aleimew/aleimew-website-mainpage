import React from "react";
import { Nav, NavLink, NavMenu } from "./NavbarElements";

const Navbar = () => {
    return (
        <>
            <Nav>
                <NavMenu>
                    <NavLink to="/Who" activeStyle>
                        Who am I, and why am I like this?
                    </NavLink>
                    <NavLink to="/What" activeStyle>
                        What have I done?
                    </NavLink>
                    <NavLink to="/How" activeStyle>
                        How can you summon me, probably?
                    </NavLink>
                </NavMenu>
            </Nav>
        </>
    );
};

export default Navbar;