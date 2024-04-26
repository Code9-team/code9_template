import React, {
  Context,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react"
import { useNuiEvent } from "../hooks/useNuiEvent"
import { debugData } from './../utils/debugData';


debugData([
    {
      action: 'route',
      data: "home",
    }
])

export const RouterContext = createContext()

export const RouterProvider = ({ children }) => {
  const [route, navigateTo] = useState("home")

  useNuiEvent("route", (route)=> {
    navigateTo(route)
  })

  return (
    <RouterContext.Provider value={{ route, navigateTo }}>
      {children}
    </RouterContext.Provider>
  )
}
