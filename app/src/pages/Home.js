import React, {useState, useEffect } from 'react'
import Profile from '../components/Profile'
import Loader from '../components/Loader'
import Arvispace from '../components/Arvispace'

const Home = (props) => {
    
    const [Loading, setLoading] = useState(true)
    
    useEffect(() => {
        setTimeout(() => setLoading(false), 1500);
    }, []);

    if(Loading)
    {
        return(
            <React.Fragment>
                <Loader label="Cargando..."/>
            </React.Fragment>
        )
    }
    return(
        <React.Fragment>
            <Profile />
            <Arvispace />
        </React.Fragment>
    )
}

export default Home