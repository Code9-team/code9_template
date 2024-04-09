import React, {
  Context,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react"
import { useNuiEvent } from "../hooks/useNuiEvent"
import Home from "./../pages/home"
import Settings from "./../pages/settings"
import { debugData } from './../utils/debugData';


// Kendine useNui event gönderebilirsin.
debugData([
    {
      action: 'route',
      data: "home",
    }
])

export const RouterContext = createContext()

export const RouterProvider = ({ children }) => {
  const [route, setRoute] = useState(<Home />)
  const navigateTo = (route) => {
    setRoute(route)
  }

  useNuiEvent("route", (route)=> {
    if(route === "home") {
      // Başka bir sayfaya navigate olabilirsin.
      navigateTo(<Home />)
    }
    if(route === "settings") {
      navigateTo(<Settings />)
    } 
  })

  return (
    <RouterContext.Provider value={{ route, navigateTo }}>
      {children}
    </RouterContext.Provider>
  )
}
