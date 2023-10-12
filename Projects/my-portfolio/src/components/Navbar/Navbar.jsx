import React from 'react';
import { Nav, NavLink, NavbarContainer, Span, NavLogo, NavItems, GitHubButton, ButtonContainer, MobileIcon, MobileMenu, MobileNavLogo, MobileLink } from './NavbarStyle.js'


export default function Navbar() {
    return (

        <Nav>

            <NavbarContainer>

                <NavLogo> Logo  </NavLogo>

                <MobileIcon> Mobile Icon </MobileIcon>

                <NavItems>
                    <NavLink>About</NavLink>
                    <NavLink>Skills </NavLink>
                    <NavLink>Experience </NavLink>
                    <NavLink>Projects </NavLink>
                    <NavLink>Education </NavLink>
                </NavItems>

                <ButtonContainer>
                    <GitHubButton>
                        Github Profile
                    </GitHubButton>
                </ButtonContainer>



            </NavbarContainer>
        </Nav>
    )
}
