import React, { useState } from "react";
import Count from "./Count";

export default function Counter() {
  const [isVisible, setIsVisible] = useState(true);
  return (
    <div>
      {isVisible && <Count />}
      <button
        onClick={() => {
          setIsVisible(!isVisible);
        }}
      >
        Toggle
      </button>
    </div>
  );
}
