
# Dusa React Template




## Kullanım

Projeyi klonlayın

```bash
  npx degit https://github.com/Dusa-Team/dusa_template my-project
```

Proje dizinine gidin

```bash
  cd my-project
```

Gerekli paketleri yükleyin

```bash
  npm install
```

Sunucuyu çalıştırın

```bash
  npm run dev
```

  
## useRoute
```javascript
import React from "react"
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
```

## useLanguage
```javascript
import { useLanguage } from './../hooks/useLanguage';
function Home() {
    const { language } = useLanguage();
    return ( 
        <>
            <h1> {language.home} </h1>
        </>
     );
}

export default Home;
```

## useNuiEvent

```javascript
import React from "react"
import { useNuiEvent } from "../hooks/useNuiEvent"
import { useRoute } from './../hooks/useRoute';
import Home from "./../pages/home"
import Settings from "./../pages/settings"
function App() {
  const { route, navigateTo } = useRoute()

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
    <>
      {route}
    </>
  )
}

export default App
```

## debugData

```javascript
import React from "react"
import { useNuiEvent } from "../hooks/useNuiEvent"
import { useRoute } from './../hooks/useRoute';
import { debugData } from "../utils/debugData";
import Home from "./../pages/home"
import Settings from "./../pages/settings"

debugData([
    {
      action: 'route',
      data: "home",
    }
])

function App() {
  const { route, navigateTo } = useRoute()

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
    <>
      {route}
    </>
  )
}

export default App
```

  
