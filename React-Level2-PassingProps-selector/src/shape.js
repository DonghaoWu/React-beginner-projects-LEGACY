import React from "react";

const Shape = props => {
  const { shape, selectFunc } = props;
  return <div className={shape} onClick={() => selectFunc(shape)} />;
};

export default Shape;
