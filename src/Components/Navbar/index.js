import React from "react";
import { Nav, NavMobile, NavLink, NavLinkMobile, NavMenu, NavMenuMobile } from "./NavbarElements";
import { Page } from "../PageElements";

const Navbar = (props) => {
    return (
        <Page>
            {!props.mobile ? (
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
            ) : (
                <NavMobile>
                    <NavMenuMobile>
                        <NavLinkMobile to="/Who" activeStyle>
                            Who am I, and why am I like this?
                        </NavLinkMobile>
                        <NavLinkMobile to="/What" activeStyle>
                            What have I done?
                        </NavLinkMobile>
                        <NavLinkMobile to="/How" activeStyle>
                            How can you summon me, probably?
                        </NavLinkMobile>
                    </NavMenuMobile>
                </NavMobile>
            )}
        </Page>
    );
};

export default Navbar;