import React, { useEffect } from "react";
import { DeleteButton, FavouritesContainer, Title } from "./Measures.styled";
import { useDispatch, useSelector } from "react-redux";
import { deleteMeasure, getMeasures } from "../../store/slices/conversions";

function Measures() {
  const { measures } = useSelector((state) => state.conversions);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMeasures());
  }, [])
  

  return (
    <>
      <FavouritesContainer id="favourites-container">
        {measures.length > 0 && <Title> saved </Title>}
        {measures.map(({ id, value }) => (
          <div className="fav-measure" key={id}>
            <div style={{ margin: "0 0 0 18px" }}>{value}</div>
            <DeleteButton onClick={() => dispatch(deleteMeasure(id))}>
              X
            </DeleteButton>
          </div>
        ))}
      </FavouritesContainer>
    </>
  );
}

export { Measures };
