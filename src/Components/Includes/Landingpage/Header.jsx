import React from "react";
import { Link, Outlet } from "react-router-dom";
import styled from "styled-components";
import Dioz from "../../Assests/images/DioZ1.svg";

const Header = () => {

    return (
        <>
            <HeaderContainer>
                <HeaderWrapper>
                    <MainContent>
                        <Image href="/">
                            <img src={Dioz} alt="logo" />
                        </Image>
                        <NavContent>
                            <NavBox>
                                <Navitem to="/Diyoz">#Dioz</Navitem>
                                <Navitem to="/Dstories">Dstories</Navitem>
                                <Navitem to="/D-world">D-world</Navitem>
                                <Navitem to="/categories">Catogories</Navitem>
                                <Navitem to="/new">What's New</Navitem>
                            </NavBox>
                        </NavContent>
                        <Right>
                            <Input id="close"  type="text" placeholder="search" />
                            <Label for="close">
                            <SearchContent>
                                <img
                                    src={
                                        require("../../Assests/images/noun_Search_-3.svg")
                                            .default
                                    }
                                    alt="search"
                                />
                            </SearchContent>
                            </Label>
                            <CartContent>
                                <img
                                    src={
                                        require("../../Assests/images/noun_cart_-93.svg")
                                            .default
                                    }
                                    alt="cart"
                                />
                            </CartContent>
                            <HeartContent>
                                <img
                                    src={
                                        require("../../Assests/images/Heart.svg")
                                            .default
                                    }
                                    alt="Heart"
                                />
                            </HeartContent>
                            <ProfileContent>
                                <img
                                    src={
                                        require("../../Assests/images/Iconly.svg")
                                            .default
                                    }
                                    alt="profile"
                                />
                            </ProfileContent>
                        </Right>
                    </MainContent>
                </HeaderWrapper>
            </HeaderContainer>
            <Outlet />
        </>
    );
};
export default Header;
const HeaderContainer = styled.div`
    background-color: black;
    height: 9vh;
    border-bottom-left-radius: 1em;
    border-bottom-right-radius: 1em;
`;
const HeaderWrapper = styled.div`
    width: 85%;
    margin: 0 auto;
`;
const MainContent = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: wheat;
    padding-top: 42px;
`;
const Image = styled.a`
    cursor: pointer;
    width: 9%;
    img {
        display: block;
        width: 100%;
    }
`;
const NavContent = styled.div`
    width: 32%;
`;
const NavBox = styled.div`
    display: flex;
    justify-content: center;
`;
const Navitem = styled(Link)`
    font-size: 18px;
    margin-right: 27px;
    cursor: pointer;
    &:hover {
        color: brown;
    }
`;
const Right = styled.div`
    width: 25%;
    display: flex;
    align-items: center;
    cursor: pointer;
`;
const Input = styled.input`
    border-radius: 10px;
    margin-right: 6px;
    border: none;
    color: black;
    padding: 5px 11px;
`;
const SearchContent = styled.div`
    margin-right: 25px;
    width: 20px;
    cursor: pointer;
    img {
        display: block;
        width: 100%;
    }
`;
const CartContent = styled.div`
    margin-right: 25px;
    width: 20px;

    img {
        display: block;
        width: 100%;
    }
`;
const HeartContent = styled.div`
    margin-right: 25px;
    width: 20px;
    img {
        display: block;
        width: 100%;
    }
`;
const ProfileContent = styled.div`
    width: 20px;
    img {
        display: block;
        width: 100%;
    }
`;
const Label = styled.label`
    
`;
