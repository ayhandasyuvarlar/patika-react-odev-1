import React, { useEffect, useState } from "react";

export default function Count() {
  const [number, setNumber] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setNumber((n) => n + 1);
    }, 1000);
    return () => console.log('unmount edildi')
  },[]);
  return (
    <div>
      <div>{number}</div>
    </div>
  );
}
