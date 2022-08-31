import { useState } from "react";
import { useDispatch } from "react-redux";
import { changeColor } from "../features/setTheme";
import { darkMode } from "../features/darkMode";

export default function Theme() {
  const [color, setColor] = useState("");
  const [dark, setDark] = useState(false);
  const dispatch = useDispatch();

  function toogle() {
    setDark((prev) => !prev);
    if (dark) dispatch(darkMode({ bg: "black", text: "white" }));
    else dispatch(darkMode({ bg: "white", text: "black" }));
  }

  return (
    <div>
      {/* <input
        type="text"
        onChange={(e) => {
          setColor(e.target.value);
        }}
      />
      <button
        onClick={() => {
          dispatch(changeColor(color));
        }}
      >
        SetTheme
      </button> */}
      {dark && <button onClick={toogle}>DarkMode</button>}
      {!dark && <button onClick={toogle}>LightMode</button>}
    </div>
  );
}
