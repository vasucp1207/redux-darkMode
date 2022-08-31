import Login from "./components/Login";
import Profile from "./components/Profile";
import Theme from "./components/Theme";
import { useSelector } from "react-redux";
import "./styles.css";

export default function App() {
  const darkMode = useSelector((state) => state.mode.value);

  return (
    <div
      className="App"
      style={{ background: darkMode.bg, color: darkMode.text }}
    >
      <Profile />
      <Login />
      <Theme />
    </div>
  );
}
