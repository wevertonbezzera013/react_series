import React from 'react'
import { Navbar } from './components'
import { Header, Footer } from './components/container'

import './App.scss'

const App = () => {
    return (
        <div>
            <Navbar/>
            <Header/>
            <Footer/>
        </div>
    )
}

export default App