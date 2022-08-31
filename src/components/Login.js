import { useState } from "react";
import { useDispatch } from "react-redux";
import { login, logout } from "../features/user";

export default function Login() {
  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");

  return (
    <div className="login">
      <input
        type="text"
        placeholder="enter your name"
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="enter your age"
        onChange={(e) => setAge(e.target.value)}
      />
      <input
        type="email"
        placeholder="enter your email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <div className="btn">
        <button
          onClick={() =>
            dispatch(login({ name: name, age: age, email: email }))
          }
        >
          login
        </button>
        <button onClick={() => dispatch(logout())}>logout</button>
      </div>
    </div>
  );
}
