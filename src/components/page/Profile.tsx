import React from "react";
import styled from "styled-components";
import Info from "../user/Info";
import Leave from "../user/Leave";

const Container = styled.div`
  margin: 20em auto;
  position: absolute;
  width: 100%;
  max-width: 800px;
  left: 50%;
  transform: translate(-50%, 0);
  background-color: #F7F7F7;
  overflow: hidden;
  display: flex;
  flex-direction: column;
`;

const Profile = () => {
  return (
    <>
      <Container>
          <Info />
          <Leave />
      </Container>

      {/* <Container>
      <Leave />
      </Container> */}
    </>
  );
};
export default Profile;
