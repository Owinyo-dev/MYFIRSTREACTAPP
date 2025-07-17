import React, { useState } from "react";

function ColorPicker() {
  const [color, setColor] = useState("#000000");
  function handleColorChange(event) {
    setColor(event.target.value);
  }

  return (
    <>
      <div style={{ backgroundColor: color }}>
        <h1>Color Picker</h1>
      </div>
      <div>
        <label>Pick Color</label>
        <input type="color" value={color} onChange={handleColorChange} />
      </div>
    </>
  );
}
export default ColorPicker;
