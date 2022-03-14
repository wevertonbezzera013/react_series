import React from 'react'
import { Navbar } from './components'
import { Header, Footer, Body } from './components/container'

import './App.scss'

const App = () => {
    return (
        <div>
            <Navbar/>
            <Header/>
            <Body/>
            <Footer/>
        </div>
    )
}

export default App