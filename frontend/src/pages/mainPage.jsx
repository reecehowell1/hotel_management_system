 import React from 'react';
 import Lottie from 'lottie-react';
 import {Link} from 'react-router-dom';
 import animationData from '../assets/animation.json';
 
 function mainPage() {
   return (
    <div className = 'd-flex flex-column justify-content-center align-items vh-100 text-center bg-light'>
        <div style = {{maxwidth:'400px'}}>
            <Lottie animationData={animationData} loop={true}/>
        </div>
       <h2>It looks like you are not signed in!</h2>
       <p>Please log in to access the hotel management system</p>
       <Link to='/login'>
            <button className="btn btn-primary mt-3 px-4 py-2">
                Log In
            </button>
       
       </Link>
    </div>

   );
 }
 
 export default mainPage;
 
 


