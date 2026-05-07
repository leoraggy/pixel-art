import { useState } from "react";
import "./App.css";
import { rainbowColors } from "./data";
import ColorPallete from "./components/ColorPallete";

function App() {
  const defaultColor = "#ffffff";
  const defaultSize = 16;

  const createGrid = () => {
    const newGrid = Array.from({ length: defaultSize }, () =>
      Array(defaultSize).fill(defaultColor),
    );

    return newGrid;
  };

  const [grid, setGrid] = useState(createGrid);
  const [color, setColor] = useState(defaultColor);

  const paint = (row, col) => {
    const next = grid.map((row) => row.slice());

    next[row][col] = color;

    setGrid(next);
  };

  const changeColor = () => {
    setColor(color);
  };
  const clearGrid = () => {
    setGrid(createGrid);
  };

  return (
    <>
      <div className="pixel-art">
        <h1>Pixel Art Editor</h1>
        <label className="pixel-tools">
          Color
          <input
            type="color"
            value={color}
            onChange={(e) => setColor(e.target.value)}
          />
        </label>

        <ColorPallete changeColor={color} />
        <button className="clear-btn" onClick={clearGrid}>
          Clear
        </button>

        <div
          className="pixel-grid"
          style={{ gridTemplateColumns: `repeat(${defaultSize}, 1fr)` }}
        >
          {grid.map((row, r) =>
            row.map((color, c) => (
              <button
                key={`${r}-${c}`}
                className="pixel"
                style={{ background: color }}
                aria-label={`Pixel ${r}, ${c}`}
                onClick={() => paint(r, c)}
              />
            )),
          )}
        </div>
      </div>
    </>
  );
}

export default App;
