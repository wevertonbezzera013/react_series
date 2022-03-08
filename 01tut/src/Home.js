import { useState } from 'react'

const Home = () => {

/*     let name = 'Weverton' */

    const [name, setName] = useState('Mario')
    const [age, setAge] = useState(25)

    const handleClick = () => {
        setName('Weverton B. Costa')
        setAge(21)
    }

    return ( 
        <div className="home">
            <h2>Homepage</h2>
            <p>{ name } is { age } years old</p>
            <button onClick={handleClick}>Click me</button>
        </div>
     );
}

export default Home;