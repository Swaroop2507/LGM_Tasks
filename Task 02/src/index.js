import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";
import Ecommerce from "./Ecommerce";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <Ecommerce />
  </StrictMode>
);
