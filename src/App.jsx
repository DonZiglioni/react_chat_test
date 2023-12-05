import { useState } from 'react'
import Home from './components/Home/Home';
import { BrowserRouter } from 'react-router-dom';
import RoutesList from './RoutesList';
import './App.css'

function App() {

  return (
    <BrowserRouter>
      <RoutesList />
    </BrowserRouter>
  )
}

export default App
