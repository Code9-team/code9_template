import React from "react"
import ReactDOM from "react-dom/client"
import App from "./components/App.jsx"
import { VisibilityProvider } from "./providers/VisibilityProvider"
import "./index.css"
import { RouterProvider } from "./providers/RouterProvider"
import { LanguageProvider } from "./providers/LanguageProvider"

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <VisibilityProvider>
      <RouterProvider>
        <LanguageProvider>
          <App />
        </LanguageProvider>
      </RouterProvider>
    </VisibilityProvider>
  </React.StrictMode>
)
