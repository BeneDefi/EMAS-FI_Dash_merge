import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { App } from "./App";

// Get the root element
const rootElement = document.getElementById("app");

if (!rootElement) {
  throw new Error("Root element not found. Make sure there's an element with id 'app' in your HTML.");
}

// Create and render the app
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);