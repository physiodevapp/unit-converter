import React, { useEffect } from "react";
import {
  Container,
  Title,
  Selector,
  OptionSelector,
  InputField,
  ResultValue,
  ResultUnits,
  SwitchBtn,
  SaveBtn,
  ResultContainer,
  InputLabel,
  InputContainer,
  SelectorContainer,
} from "./Calculator.styled";
import { useDispatch, useSelector } from "react-redux";
import {
  changeUnits,
  saveMeasure,
  switchUnits,
  calculate,
  postMeasure,
  getMeasures,
} from "../../store/slices/conversions";

import heartIcon from "../../assets/icons8-heart-32.png";
import sortArrowIcon from "../../assets/icons8-sorting-arrows-32.png";

function Calculator() {
  const {
    units,
    selectedConversion,
    inputValue,
    outputValue: calculatedValue,
  } = useSelector((state) => state.conversions);
  const dispatch = useDispatch();

  const onClickSave = () => {
    const measure = {
      value: `${inputValue} ${
        selectedConversion.split("_")[0]
      } \u2192 ${calculatedValue} ${selectedConversion.split("_")[1]}`
    }
    
    dispatch(postMeasure(measure));
  };

  useEffect(() => {
    calculatedValue &&
      selectedConversion &&
      dispatch(calculate({ inputValue, selectedConversion }));
  }, [selectedConversion]);

  return (
    <>
      <Container id="calculator-container">
        <Title id="title-container">convert</Title>
        <SelectorContainer
          id="selector-container"        >
          <Selector
            value={selectedConversion}
            onChange={(ev) => dispatch(changeUnits(ev.target.value))}
          >
            {units.map(({ conversion }) => (
              <OptionSelector key={conversion} value={conversion}>
                {`${conversion.split("_")[0]}`} &#8594;{" "}
                {`${conversion.split("_")[1]}`}
              </OptionSelector>
            ))}
          </Selector>
          <SwitchBtn
            onClick={() => dispatch(switchUnits(selectedConversion))}
          >
            <img
              src={sortArrowIcon}
              alt=""
              style={{ height: "100%", width: "auto" }}
            />
          </SwitchBtn>
        </SelectorContainer>
        <InputContainer
          id="input-container"
        >
          <InputField
            type="text"
            value={inputValue}
            onChange={(ev) =>
              dispatch(
                calculate({ inputValue: ev.target.value, selectedConversion })
              )
            }
          ></InputField>
          <InputLabel>
            {selectedConversion.split("_")[0]}
          </InputLabel>
        </InputContainer>
        <ResultContainer
          id="result-container"
        >
          <SaveBtn
            $inputValue={inputValue}
            onClick={onClickSave}
            disabled={!inputValue}
          >
            <img
              src={heartIcon}
              alt=""
              style={{ height: "100%", width: "auto" }}
            />
          </SaveBtn>
          <div
            style={{
              height: "38px",
              display: "flex",
            }}
          >
            <ResultValue id="label-result" htmlFor="">
              {calculatedValue}
            </ResultValue>
            <ResultUnits id="label-units" htmlFor="">
              {selectedConversion.split("_")[1]}
            </ResultUnits>
          </div>
        </ResultContainer>
      </Container>
    </>
  );
}

export { Calculator };
