import { FaBars } from "react-icons/fa";
import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";

export const Nav = styled.nav`
    height: 85px;
    display: flex;
    justify-content: space-between;
    z-index: 12;
`;

export const NavMobile = styled.nav`
    height: 85px;
    display: flex;
    justify-content: space-between;
    z-index: 12;
    text-align: center;
`;

export const NavLink = styled(Link)`
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;
    border-bottom: 3px solid black;
    margin-bottom: -2rem;
`;

export const NavLinkMobile = styled(Link)`
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0 1rem;
    cursor: pointer;
    border: 3px solid black;
    margin-bottom: 1rem;
`;

export const Bars = styled(FaBars)`
    display: none;
    @media screen and (max-width: 768px) {
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 75%);
        font-size: 1.8rem;
        cursor: pointer;
    }
`;

export const NavMenu = styled.div`
    display: flex;
    align-items: center;
    margin-right: -24px;
    /* Second Nav */
    /* margin-right: 24px; */
    /* Third Nav */
    /* width: 100vw;
white-space: nowrap; */
    @media screen and (max-width: 768px) {
        display: none;
    }
`;

export const NavMenuMobile = styled.div`
    display flex;
    align-items: center;

    @media screen and (max-width: 768px) {
        display: block;
    }
`;