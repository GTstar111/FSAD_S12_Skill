import React, { useState } from "react";

function ToggleText() {
  const [isVisible, setIsVisible] = useState(true); 

  return (
    <div style={{ textAlign: "center", marginTop: "30px" }}>
      <h2>Toggle Text Visibility</h2>

      <button onClick={() => setIsVisible(!isVisible)}>
        {isVisible ? "Hide Text" : "Show Text"}
      </button>

      {isVisible && <p>This is a sample paragraph that can be shown or hidden.</p>}
    </div>
  );
}

export default ToggleText;
