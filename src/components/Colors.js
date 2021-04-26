import React, { useState } from "react";
import DropDown from "./DropDown";

const options = [
  {
    label: "The color red",
    value: "red",
  },
  {
    label: "the color green",
    value: "green",
  },
  {
    label: "a shade of blue",
    value: "blue",
  },
];

const Colors = () => {
  const [selected, setSelected] = useState(options[0]);

  return (
    <div>
      {" "}
      <DropDown
        label="Select a Color"
        options={options}
        selected={selected}
        onSelectChange={setSelected}
      />
      <div style={{ color: selected.value }}>
        <h1>{`This text is ${selected.value}`}</h1>
      </div>
    </div>
  );
};

export default Colors;
