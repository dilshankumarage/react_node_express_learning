
import { useState } from "react";

const COLORS = [
  "white",
  "#f8f9fa",
  "#ffe5e5",
  "#e6ffed",
  "#e5f0ff",
  "#fff7e6",
];

export default function App() {
  const [count, setCount] = useState(0);
  const [bgIndex, setBgIndex] = useState(0);
  const reset = () => setCount(0);

  const cycleBg = () => setBgIndex((i) => (i + 1) % COLORS.length);
  const currentBg = COLORS[bgIndex];

  return (
    <div
      style={{
        textAlign: "center",
        backgroundColor: currentBg,
        minHeight: "100vh",
        paddingTop: "50px",
      }}
    >
      <h1>Counter: {count}</h1>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(count - 1)} style={{ marginLeft: "10px" }}>
        -
      </button>
      <button onClick={reset} style={{ marginLeft: "10px" }}>
        Reset
      </button>
      <button onClick={cycleBg} style={{ marginLeft: "10px" }}>
        Change Background
      </button>
    </div>
  );
}
