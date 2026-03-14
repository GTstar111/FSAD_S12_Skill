import { useState } from "react";

function ColorChanger() {
  const [bgColor, setBgColor] = useState("white"); 

  const changeColor = (color) => {
    setBgColor(color);
  };

  return (
    <div
      style={{
        backgroundColor: bgColor,
        height: "100vh",
        textAlign: "center",
        paddingTop: "100px",
        transition: "0.5s ease",
      }}
    >
      <h2>Click a button to change background color</h2>
      <button onClick={() => changeColor("red")}>Red</button>
      <button onClick={() => changeColor("green")}>Green</button>
      <button onClick={() => changeColor("blue")}>Blue</button>
    </div>
  );
}

export default ColorChanger;
