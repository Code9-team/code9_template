import React, {
  Context,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react"
import { useNuiEvent } from "../hooks/useNuiEvent"
import { debugData } from "./../utils/debugData"

export const LanguageContext = createContext()

debugData([
  {
    action: "language",
    data: {
        home: "Anasayfa",
        settings: "Ayarlar",
    },
  },
])

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState({})
  const changeLanguage = (lang) => {
    setLanguage(lang)
  }

  useNuiEvent("language", (lang) => {
    changeLanguage(lang)
  })

  return (
    <LanguageContext.Provider
      value={{ language, changeLanguage }}
    >
      {children}
    </LanguageContext.Provider>
  )
}