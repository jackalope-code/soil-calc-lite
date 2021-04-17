import React from 'react';
import styled from 'styled-components';
import logo from '../images/logo.png';

const StyledHeader = styled.div`
.horizontal-bar {
    display: flex;
    justify-content: center;
}

#header-logo {
    margin-right: auto;
}
`;

const LogoStyle = styled.div`
    margin-right: auto;
`;

const StyledHeaderTitle = styled.h1`
    margin-right: auto;
    font-size: 48px;
`;

const Header = () => {
    return (
        <StyledHeader>
            <header>
                <div className="horizontal-bar">
                    <LogoStyle><a href="http://www.phelangardens.com"><img id="header-logo" src={logo} width="120px" height="120px"></img></a></LogoStyle>
                    <StyledHeaderTitle>Soil Calculator</StyledHeaderTitle>
                </div>
                <p>
                Calculate the amount of bags needed to fill a rectangular region. <b>Bag volume must be specified in cubic feet (ft<sup>3</sup>)</b>. Rectangular dimensions may be specified with feet and inches.
                </p>
            </header>
        </StyledHeader>
    )
}

export default Header;