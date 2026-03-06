
import './App.css'

import { Route, Routes } from 'react-router-dom'

import { lazy, Suspense } from 'react'

const Home = lazy(() => import('./pages/Home'))
const About = lazy(() => import('./pages/About'))

function App() {
 

  return (
    <>
    
    <Suspense fallback={
  <div className="w-full h-screen flex items-center justify-center">
    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
  </div>
}></Suspense>
     <Routes>

      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
    


     </Routes>


    </>
  )
}

export default App
