import React, { useContext, useEffect } from "react"
import { useRoute } from './../hooks/useRoute';
function App() {
  const { route, navigateTo } = useRoute()
  return (
    <>
      {route}
    </>
  )
}

export default App
