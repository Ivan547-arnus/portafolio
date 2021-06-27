import React, {useState, useEffect} from 'react'
import Loader from '../components/Loader'
import Arvispace from '../components/Arvispace'
import Arvis from '../components/Arvis'
import SportCloset from '../components/SportCloset'


const Projects = (props) => {
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
            <Arvispace />
            <Arvis />
            <SportCloset />
        </React.Fragment>
    )
}
export default Projects