import { setMeasures } from "./conversionsSlice";
import measuresService from "../../../services/measures"

export const getMeasures = () => {
  return async(dispacth, getState) => {
    const measures = await measuresService.list();
    dispacth(setMeasures(measures));
  }
}

export const postMeasure = (measure) => {
  return async(dispatch, getState) => {
    try {
      await measuresService.create(measure);
      dispatch(getMeasures());
    } catch (error) {
      console.error(error);
    }
  }
}

export const deleteMeasure = (measureId) => {
  return async(dispacth, getState) => {
    try {
      await measuresService.erase(measureId);
      dispacth(getMeasures());
    } catch(error) {
      console.error(error);
    }
  }
}