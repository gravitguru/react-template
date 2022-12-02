import React from 'react'
import {BrowserRouter as Router , Routes, Route} from 'react-router-dom'
import {Provider} from 'react-redux'
import store from '../Feature/Store'
import {home,about} from './Pages/pages'

const Gravit = () => {
  return (
    <Provider store={ store}>
        <Router>
            <Routes>
                <Route path="/" element={home} />
                <Route path="/about" element={about} />
            </Routes> 
        </Router>
    </Provider>
  )
}

export default Gravit
