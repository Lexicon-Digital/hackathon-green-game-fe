import * as React from "react";
import Slider from "@mui/material/Slider";

export default function Progress() {
  const marks = [
    {
      value: 30,
      label: "Bronze",
    },
    {
      value: 50,
      label: "Silver",
    },
    {
      value: 75,
      label: "Gold",
    },
  ];
  return (
    <Slider
      defaultValue={35}
      step={10}
      marks={marks}
      min={10}
      max={110}
      disabled
    />
  );
}
