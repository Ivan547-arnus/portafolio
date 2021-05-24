import React from 'react'
import Navbar from '../components/Navbar'

function Layout(props){
    return(
        <React.Fragment>
            <React.Fragment>
                <Navbar />
                {props.children}
            </React.Fragment>
        </React.Fragment>
    )
}

export default Layout