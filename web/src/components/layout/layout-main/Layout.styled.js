import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-flow: column nowrap;
  padding: 0;
  height: 100vh;
  overflow: hidden;
`;

export const Mainer = styled.div`
  flex-grow: 1;
  display: flex;
  flex-flow: column nowrap;
`;

export const MainerContent = styled.div`
  display: flex;
  flex-flow: column wrap;
  align-self: center;
  flex-grow: 1;
  width: 100%;
`;
