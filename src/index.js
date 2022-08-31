import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./features/user";
import themeReducer from "./features/setTheme";
import modeReducer from "./features/darkMode";
import { Provider } from "react-redux";

import App from "./App";

const store = configureStore({
  reducer: {
    user: userReducer,
    theme: themeReducer,
    mode: modeReducer
  }
});

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);
