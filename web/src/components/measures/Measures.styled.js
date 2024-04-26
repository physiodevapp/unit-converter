import styled from "styled-components";

export const FavouritesContainer = styled.div`
  overflow-y: auto;
  scrollbar-width: none;
  flex: 1 1 0;
  color: black;
  display: flex;
  flex-flow: row wrap;
  align-content: flex-start;
  justify-content: space-between;
`;

export const Title = styled.div`
  flex: 1 1 100%;
  height: 26px;
  font-family: Poppins;
  font-size: 16px;
  font-weight: 700;
  line-height: 24px;
  text-align: left;
  margin-bottom: 20px;
`

export const DeleteButton = styled.button`
  border: 0px solid white;
  background-color: #ffffff00;
  margin:  0 6px 0 0;
`