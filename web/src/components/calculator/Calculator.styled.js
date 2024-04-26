import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-flow: row wrap;
  height: 209px;
  gap: 0px;
  border-radius: 21px;
  opacity: 1;
  background: #2e0039;
  margin: 23px 21px 43px 21px;
`;

export const Title = styled.div`
  font-family: Poppins;
  font-size: 24px;
  font-weight: 600;
  line-height: 36px;
  text-align: left;
`;

export const SelectorContainer = styled.div`
  height: 32px;
  display: flex;
  align-items: flex-end;
`;

export const Selector = styled.select`
  width: 218px;
  border-style: solid;
  border-color: white;
  border-width: 0 0 2px 0;
  color: white;
  background-color: rgb(255 255 255 / 0%);
`;

export const OptionSelector = styled.option`
  font-family: Poppins;
  font-size: 14px;
  font-weight: 400;
  line-height: 21px;
  text-align: left;
  background-color: #2e0039;
`;

export const InputContainer = styled.div`
  height: 32px;
  display: flex;
  align-items: flex-end;
`;

export const InputField = styled.input`
  width: 218px;
  font-family: Poppins;
  font-size: 14px;
  font-weight: 400;
  line-height: 21px;
  border-style: solid;
  border-color: white;
  border-width: 0 0 2px 0;
  color: white;
  background-color: rgb(255 255 255 / 0%);
  text-align: right;
  outline: none;
`;

export const InputLabel = styled.label`
  width: 24px;
  height: 24px;
  margin-left: 10px;
  font-family: Poppins;
  font-size: 14px;
  font-weight: 400;
  line-height: 21px;
  text-align: left;
`;

export const ResultValue = styled.label`
  font-family: Poppins;
  font-size: 24px;
  font-weight: 700;
  line-height: 36px;
  text-align: left;
`;

export const ResultUnits = styled.label`
  font-family: Poppins;
  font-size: 16px;
  font-weight: 700;
  line-height: 24px;
  text-align: left;
  margin-left: 10px;
  margin-bottom: 5px;
  align-self: flex-end;
`;

export const SwitchBtn = styled.button`
  width: 24px;
  height: 24px;
  margin-left: 10px;
  background-color: #ffffff00;
  padding: 0;
  border: none;
`;

export const SaveBtn = styled.button`
  width: 24px;
  height: 24px;
  padding: 0;
  border: none;
  background-color: #ffffff00;
  opacity: ${(props) => (props.$inputValue ? 1 : 0.4)};
`;

export const ResultContainer = styled.div`
  display: flex;
  flexflow: row wrap;
`;
