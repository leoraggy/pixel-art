import { rainbowColors } from "../data";

function ColorPallete({ changeColor }) {
  return (
    <>
      {rainbowColors.map((color, index) => (
        <button
          key={index}
          onClick={() => changeColor(color)}
          style={{
            background: color,
            width: "20px",
            height: "20px",
            border: "1px solid #000",
          }}
        />
      ))}
    </>
  );
}

export default ColorPallete;
