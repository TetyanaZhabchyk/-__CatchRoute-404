import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
//https://github.com/TetyanaZhabchyk/-__CatchRoute-404
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
