import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-flow: column nowrap;
  height: 48px;
  gap: 0px;
  opacity: 1;
  box-shadow: 0px 2px 4px 0px #00000040;
`;

export const HeaderContent = styled.div`
  ${'' /* background-color: yellow; */}
  flex-grow: 1;
  align-self: center;
  width: 100%;
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
`

export const Title = styled.h1`
  padding: 0 0 0 11px;
  margin: 0;
  font-family: Poppins;
  font-size: 20px;
  font-weight: 900;
  line-height: 30px;
  text-align: left;
  color: #2e0039;
  text-transform: lowercase;
`;
