import React, { useEffect, useState } from "react";
import ProgressComponent from "./ProgressComponent";

const ProgressBar = () => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    setInterval(() => {
      setValue((prev) => prev + 1);
    }, 500);
  });

  return (
      <ProgressComponent value={value} />
  );
};

export default ProgressBar;
