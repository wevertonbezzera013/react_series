import React from 'react'
import Data from './Data'

import './Body.scss'

const Body = () => {

    const cnl = () => {
        return 'youtube.com'
    }
    const ytb = 'youtube.com'
    const crs = 'youtube.com'
    const somar = (v1, v2) => {
        return v1 + v2
    }

    return (
        <section>
            <h1>Curso de React</h1>
            <div className="container">
                
                <div className="container-items">

                <Data
                    canal={cnl}
                    youtube={ytb}
                    curso={crs}
                    somar={somar}
                />

                </div>

            </div>
        </section>
    )
}

export default Body