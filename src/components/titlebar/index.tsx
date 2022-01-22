import React from "react";
import { Container, Logo, InnerContainer, Title } from "./styled";

export const Titlebar = () => {
  return (
    <Container>
      <InnerContainer>
        <Logo
          src="https://www.starstable.com/images/logo.svg"
          alt="Star Stable Logo"
        />
        <Title>Home Assignment</Title>
      </InnerContainer>
    </Container>
  );
};
