import React from "react"
import { useRoute } from './../hooks/useRoute';
import Home from './../pages/home';
import Settings from './../pages/settings';
function App() {
  const { route, navigateTo } = useRoute()
  return (
    <>
      {route === "home" && <Home />}
      {route === "settings" && <Settings />}
    </>
  )
}

export default App
