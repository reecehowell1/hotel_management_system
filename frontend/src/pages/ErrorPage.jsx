import React from 'react';
import Lottie from 'lottie-react';
import animationData  from '../assets/error.json';
import {Link} from 'react-router-dom'


function ErrorPage() {
    return (
        
        <div className = 'd-flex flex-column justify-content-center align-items vh-100 text-center bg-light'>
        <div style = {{maxwidth:'150px'}}>
            <Lottie animationData={animationData} loop={true}/>
        </div>
       <h2>Oops!</h2>
       <p>Looks like there was an error signing in</p>
       <Link to='/'>
            <button className="btn btn-primary mt-3 px-4 py-2">
                Main Menu
            </button>
       
       </Link>
    </div>

        
        

    );
}

export default ErrorPage;
