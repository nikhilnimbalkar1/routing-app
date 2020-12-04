import React from 'react'
import Nav from '../starWars/Nav'

const Swapi = () => {

    const auth = JSON.parse(localStorage.getItem('auth'));
    if(auth.userName!==""){

        return (
            <Nav/>
        )

    }
    else{
        return(
            <div className="container justify-content-center">
                <h2 className="display-3">You are not logged in!Please login to view this page!</h2>
            </div>
        )
    }
   
}

export default Swapi