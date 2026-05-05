import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Homepage from './pages/home'
import { MainLayout } from './app/layout/MainLayout'
import "./app/styles/global.css"

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <MainLayout>
      <Homepage />
    </MainLayout>
  </StrictMode>,
)