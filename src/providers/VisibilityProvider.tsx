import React, {
  Context,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { useNuiEvent } from "../hooks/useNuiEvent";
import { debugData } from "../utils/debugData";
import { useRef } from "react";
import { animate } from "framer-motion";
import { useEvent } from "react-use";
import { postNui } from "../utils/postNui";

debugData([
  {
    action: "setVisible",
    data: true,
  },
]);

const VisibilityCtx = createContext<VisibilityProviderValue | null>(null);

interface VisibilityProviderValue {
  setVisible: (visible: boolean) => void;
  visible: boolean;
}

// This should be mounted at the top level of your application, it is currently set to
// apply a CSS visibility value. If this is non-performant, this should be customized.
export const VisibilityProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {

  const container = useRef<HTMLDivElement | null>(null)
  // Ui gözükmesi için true olmalı
  const [visible, setVisible] = useState(false);

  function changeVisible(data: boolean) {
    if (!data) {
      const animation = animate(container.current ?? {}, { opacity: 0, duration: 3 }); // Handle null or undefined container.current
      animation.then(() => {
        setVisible(false)
      })
    } else {
      setVisible(true)
      const animation = animate(container.current ?? {}, { opacity: 1, duration: 3 }); // Handle null or undefined container.current
      animation.then(() => {
        console.log("open ui")
      })
    }
  }

  useEvent("keydown", (e) => {
    if(e.key == "Escape") {
      changeVisible(false)
      postNui("closeNui", { visibiliy: false })
    }
  })

  useNuiEvent<boolean>("setVisible", changeVisible);

  // Handle pressing escape/backspace
  useEffect(() => {
    if (!visible) return;
  }, [visible]);

  return (
    <VisibilityCtx.Provider
      value={{
        visible,
        setVisible,
      }}
    >
      <div
        style={{ visibility: visible ? "visible" : "hidden", height: "100vh", width: "100%", position: "absolute", opacity: 0  }}
        ref={container}
      >
        {children}
      </div>
    </VisibilityCtx.Provider>
  );
};

export const useVisibility = () =>
  useContext<VisibilityProviderValue>(
    VisibilityCtx as Context<VisibilityProviderValue>,
  );
