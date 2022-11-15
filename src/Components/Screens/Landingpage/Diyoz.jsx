import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";

function Diyoz() {
    const [items, setItems] = useState([]);
    useEffect(() => {
        axios
            .get("https://fakestoreapi.com/products")
            .then(function (response) {
                setItems(response.data);
            })
            .catch(function (error) {
                console.log(error);
            })
            .then(function () {});
    }, []);

    // const getData = () => {
    //     axios
    //         .get("https://fakestoreapi.com/products")
    //         .then((response) => {
    //             console.log(response);
    //         })
    //         .catch((error) => {
    //             console.log(error);
    //         });
    // };

    // useEffect(() => {
    //     getData();
    // }, []);

    return (
        <>
            <DiyozContainer>
                <DiyozWrapper>
                    <MainContent>
                        <GalleryContent>
                            <Gallery>
                                {items.map((val) => (
                                    <ItemDiv>
                                        <ImageContainer>
                                            <img src={val.image} alt="image" />
                                        </ImageContainer>
                                        <Text>{val.category}</Text>
                                        <Price>{val.price}</Price>
                                    </ItemDiv>
                                ))}
                            </Gallery>
                        </GalleryContent>
                    </MainContent>
                </DiyozWrapper>
            </DiyozContainer>
        </>
    );
}

export default Diyoz;
const DiyozContainer = styled.div`
    background-color: pink;
    padding-top: 50px;
`;
const DiyozWrapper = styled.div`
    width: 50%;
    margin: 0 auto;
`;
const MainContent = styled.div``;
const GalleryContent = styled.div``;
const ItemDiv = styled.div``;
const Gallery = styled.div`
    display: grid;
    grid-template-columns: 2fr 2fr 2fr;
    grid-gap: 50px;
`;
const ImageContainer = styled.div`
    width: 50%;
    img {
        display: block;
        width: 100%;
    }
`;
const Text = styled.p`
    color: black;
`;

const Price = styled.p`
    color: blue;
`;
