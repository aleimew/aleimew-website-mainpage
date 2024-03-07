import React from "react";
import { Nav, NavMobile, NavLink, NavLinkMobile, NavMenu, NavMenuMobile } from "./NavbarElements";
import { Page } from "../PageElements";

const SubNavbarWhat = (props) => {
    return (
        <Page>
            {!props.mobile ? (
                <Nav>
                    <NavMenu>
                        <NavLink to="/What/Software" activeStyle>
                            Software
                        </NavLink>
                        <NavLink to="/What/Film" activeStyle>
                            Film
                        </NavLink>
                        <NavLink to="/What/Writing" activeStyle>
                            Writing
                        </NavLink>
                        <NavLink to="/What/Other" activeStyle>
                            Other
                        </NavLink>
                    </NavMenu>
                </Nav>
            ) : (
                <NavMobile>
                    <NavMenuMobile>
                        <NavLinkMobile to="/What/Software" activeStyle>
                            Software
                        </NavLinkMobile>
                        <NavLinkMobile to="/What/Film" activeStyle>
                            Film
                        </NavLinkMobile>
                        <NavLinkMobile to="/What/Writing" activeStyle>
                            Writing
                        </NavLinkMobile>
                        <NavLinkMobile to="/What/Other" activeStyle>
                            Other
                        </NavLinkMobile>
                    </NavMenuMobile>
                </NavMobile>
            )}
        </Page>
    )
}

export default SubNavbarWhat;