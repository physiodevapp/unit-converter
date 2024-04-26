import { createSlice } from "@reduxjs/toolkit";

export const conversionsSlice = createSlice({
  name: "conversions",
  initialState: {
    measures: [],
    units: [
      { conversion: "km_miles", factor: 0.621371 },
      { conversion: "miles_km", factor: 1.609343502101154 },
      { conversion: "m_ft", factor: 3.28084 },
      { conversion: "ft_m", factor: 0.3048 },
      { conversion: "cm_in", factor: 0.393701 },
      { conversion: "in_cm", factor: 2.54 },
    ],
    selectedConversion: localStorage.getItem("selectedConversion") || "km_miles",
    outputValue: "",
    inputValue: "",
  },
  reducers: {
    setMeasures: (state, {payload: measures}) => {
      state.measures = measures;
    },
    changeUnits: (state, { payload: selectedConversion }) => {
      state.selectedConversion = selectedConversion || state.selectedConversion;
      localStorage.setItem("selectedConversion", state.selectedConversion);
    },
    switchUnits: (state, { payload: selectedConversion }) => {
      state.selectedConversion = `${selectedConversion.split("_")[1]}_${selectedConversion.split("_")[0]}`;

      const newInputValue = state.outputValue;
      state.outputValue = state.inputValue;
      state.inputValue = newInputValue;

      localStorage.setItem("selectedConversion", state.selectedConversion);
    },
    calculate: (state, { payload }) => {
      const { factor } = state.units.find(
        (unit) => unit.conversion === payload.selectedConversion
      );
      
      state.inputValue = payload.inputValue
      state.outputValue = payload.inputValue
        ? Math.round(payload.inputValue * factor * 100) / 100
        : "";
    },
    saveMeasure: (state, { payload: measure }) => {
      state.measures.push(measure);
      localStorage.setItem("measures", JSON.stringify(state.measures));
    },
    removeMeasure: (state, { payload: id }) => {
      const updatedMeasures = state.measures.filter(
        (measure) => measure.id !== id
      );
      state.measures = updatedMeasures;
      localStorage.setItem("measures", JSON.stringify(updatedMeasures));
    },
  },
});

export const {
  setMeasures,
  changeUnits,
  switchUnits,
  calculate,
  saveMeasure,
  removeMeasure,
} = conversionsSlice.actions;
