import React, {useState, useEffect } from 'react'
import Loader from '../components/Loader'
import Skills from '../components/Skills'


const About = ()=> {
    
    const [Loading, setLoading] = useState(true)
    
    useEffect(() => {
        setTimeout(() => setLoading(false), 1500);
    }, []);

    if(Loading)
    {
        return(
            <React.Fragment>
                <Loader label="cargando..."/>
            </React.Fragment>
        )
    }

    return(
        <React.Fragment>
            <Skills />
        </React.Fragment>
    )
}

export default About