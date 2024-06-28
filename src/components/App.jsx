import React from "react"
import { useRoute } from "./../hooks/useRoute"
import Home from "./../pages/home"
import Settings from "./../pages/settings"
import { useUiEvent } from "./../utils/useUiEvent"
function App() {
  const { route, navigateTo } = useRoute()
  useUiEvent([
    {
      action: "CHANGE_HOME_DESC",
      data: "Gelene data",
    },
  ])
  return (
    <>
      {route === "home" && <Home />}
      {route === "settings" && <Settings />}
    </>
  )
}

export default App
