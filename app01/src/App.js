import React, { useState } from 'react'
import { Navbar } from './components'
import { Header, Footer, Body, Numero } from './components/container/'

import './App.scss'

const App = () => {

    const [num, setNum] = useState(10)

    return (
        <>
            <Navbar/>
            <Header/>
            <Body/>
            <Numero num={num} setNum={setNum}/>
            <Footer/>
        </>
    )
}

export default App