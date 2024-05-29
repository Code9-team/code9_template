import React, {
  createContext,
  useState,
} from "react"
import { useNuiEvent } from "../hooks/useNuiEvent"
import { debugData } from "./../utils/debugData"

export const DataContext = createContext()

debugData([
  {
    action: "CHANGE_HOME_DESC",
    data: "Gelene data"
  },
])

export const DataProvider = ({ children }) => {
  const [data, setData] = useState({
    home: {
      title: "Anasayfa",
      description: "Bu bir test",
    },
    settings: {
      title: "Ayarlar",
      description: "Bu bir test",
    },
  })

  useNuiEvent("CHANGE_HOME_DESC", (data) => {
    setData({
      ...data,
      home: {
        ...data.home,
        description: data,
      },
    })
  })

  const [uiData, setUiData] = useState({
    uiData: "Only UI Data"
  })

  return (
    <DataContext.Provider value={{ data, setData, uiData, setUiData }}>
      {children}
    </DataContext.Provider>
  )
}
