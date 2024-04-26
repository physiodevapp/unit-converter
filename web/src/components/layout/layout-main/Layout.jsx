import React from "react";
import "./Layout.css";
import { Header, Footer } from '../../index'
import { Container, Mainer, MainerContent } from "./Layout.styled";

function Layout({ children }) {
  return (
    <>
      <Container>
        <Header />
        <Mainer>
          <MainerContent id="mainer-content">
            {children}
          </MainerContent>
        </Mainer>
        <Footer />
      </Container>
    </>
  );
}

export default Layout;
