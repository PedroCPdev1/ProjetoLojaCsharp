import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '../css/App.css'
import Header from './Header.tsx'
import Body from './Body.tsx'
import Footer from './Footer.tsx'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <div>
      <Header />
    </div>
    <div>
      <Body />
    </div>
    <div>
      <Footer />
    </div>
  </StrictMode>,
)
