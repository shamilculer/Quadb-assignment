import './App.css'
import {Routes, Route} from "react-router-dom"
import routes from './routes/routes'

function App() {
 
  return (
    <div className='App flex bg-[var(--color-gradient)]'>
     <Routes>
        {routes.map((route,index)=> (
          <Route {...route} key={index} />
        ))}
     </Routes>
    </div>
  )
}

export default App
