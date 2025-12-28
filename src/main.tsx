import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { MyHook } from './MyHook.tsx'
import MyGame from './MyGame.tsx'
import { Pay } from './Pay.tsx'
//import { MyView } from './MyView.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Pay  />
  {/* <App />*/}
  {/* <MyGame />*/}
   {/*<MyHook />*/}
 {/*} <MyView/>*/}
  </StrictMode>,
)
