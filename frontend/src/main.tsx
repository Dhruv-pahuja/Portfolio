import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {Provider} from 'react-redux'
import store from '../src/store/store.ts'
import './index.css'
import App from './App.tsx'

const currentTheme = store.getState().theme.theme;
document.documentElement.className = currentTheme

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
)
