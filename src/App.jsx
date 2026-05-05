import { useState } from "react";
import "./App.css";
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
  <label className="pixel-tools">
  Color
  <input
    type="color"
    value={paint}
    onChange={e => paint(e.target.value)}
  />
</label>
  return (
    <>
      <div className="pixel-art">
        <h1>Pixel Art Editor</h1>

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
