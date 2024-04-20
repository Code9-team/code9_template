import React from "react"
import ReactDOM from "react-dom/client"
import App from "./components/App.jsx"
import "./index.css"
import { VisibilityProvider } from "./providers/VisibilityProvider"
import { DataProvider } from "./providers/DataProvider"
import { RouterProvider } from "./providers/RouterProvider"
import { LanguageProvider } from "./providers/LanguageProvider"

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <VisibilityProvider>
      <RouterProvider>
        <DataProvider>
          <LanguageProvider>
            <App />
          </LanguageProvider>
        </DataProvider>
      </RouterProvider>
    </VisibilityProvider>
  </React.StrictMode>
)
