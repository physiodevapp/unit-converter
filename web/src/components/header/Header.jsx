import React from "react";
import { Title, Container, HeaderContent } from "./Header.styled";

function Header() {
  return (
    <>
      <Container>
        <HeaderContent id="header-content">
          <img
            src="https://img.icons8.com/?size=32&id=16026&format=png"
            style={{ width: "32px", height: "32px" }}
            alt=""
          />
          <Title>Unit converter</Title>
        </HeaderContent>
      </Container>
    </>
  );
}

export { Header };
