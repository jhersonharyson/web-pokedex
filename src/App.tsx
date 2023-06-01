import { BrowserRouter } from 'react-router-dom'
import { RecoilRoot } from 'recoil'
import AppRouter from './infrastructure/routes/routes'
import 'antd/dist/reset.css';
import "./App.css"

function App() {
  return (
    <BrowserRouter>
      <RecoilRoot>
        <AppRouter />
      </RecoilRoot>
    </BrowserRouter>
  )
}

export default App
