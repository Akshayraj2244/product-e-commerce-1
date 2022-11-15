import React from "react";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Spotlight = () => {
    const settings = {
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
    };

    return (
        <>
            <SpotlightContainer>
                <SpotlightWrapper>
                    <MainContent>
                        <Slider {...settings}>
                            <ImageContent>
                                <img
                                    src={require("../../Assests/images/pexels-mentatdgt-1485781.jpg")}
                                    alt="image"
                                />
                            </ImageContent>
                            <ImageContent>
                                <img
                                    src={require("../../Assests/images/pexels-juan-mendez-1536619.jpg")}
                                    alt="image"
                                />
                            </ImageContent>
                            <ImageContent>
                                <img
                                    src={require("../../Assests/images/pexels-godisable-jacob-896291.jpg")}
                                    alt="image"
                                />
                            </ImageContent>
                            <ImageContent>
                                <img
                                    src={require("../../Assests/images/1437631.jpg")}
                                    alt="image"
                                />
                            </ImageContent>
                        </Slider>
                        <Text>Visit "DioZ Near" For Store Details......!</Text>
                    </MainContent>
                </SpotlightWrapper>
            </SpotlightContainer>
        </>
    );
};
export default Spotlight;

const SpotlightContainer = styled.div``;
const SpotlightWrapper = styled.div``;
const MainContent = styled.div`
    position: relative;
`;
const ImageContent = styled.div`
    width: 20%;
    height: 90vh;
    img {
        display: block;
        width: 100%;
    }
`;
const Text = styled.h1`
    position: absolute;
    left: 38%;
    top: 10%;
    font-size: 25px;
    color: black;
`;
