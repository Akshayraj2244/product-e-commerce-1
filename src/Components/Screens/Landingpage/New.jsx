import React from 'react'
import styled from 'styled-components'

const New = () => {
  return (
   <>
    <NewContainer>
      <NewWrapper>
        <Heading>COMING SooN...</Heading>
      </NewWrapper>
    </NewContainer>
   </>
  )
}

export default New

const NewContainer = styled.div`
  background-color: brown;
  height: 100vh;
  position: fixed;
  width: 100%;
`;
const NewWrapper = styled.div`
  
`;
const Heading = styled.h1`
  color: black;
  text-align: center;
  padding-top: 250px;
  font-size: 45px;


`;