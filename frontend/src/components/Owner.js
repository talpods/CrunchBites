import React from 'react';

import { Link } from "react-router-dom";


function Owner ()  {
    return (
        
      <div className="container mx-auto py-14
      flex justify-center items-center ">
             <div className="w-1/3">
               <p className="  font-semibold text-center text-xl - py-5 "> Join Crunch Bites Now! </p>
               <div style={{backgroundColor: '#EDB672'}} className="border-teal p-6 border-t-12 mb-6 rounded-lg shadow-lg">
                 <form id="user-input"> 
                   <div className="mb-4">
                     <label htmlFor="restaurantname" className="font-bold text-grey-darker block mb-2 ">Restaurant name </label>
                     <input type="text" id="restaurantname" className="block appearance-none w-full bg-white border border-grey-light hover:border-grey px-2 py-2 rounded shadow" placeholder="Restaurant name" />
                   </div>
                   <div className="mb-4">
                     <label htmlFor="location" className="font-bold text-grey-darker block mb-2">Location</label>
                     <input type="text" id="location" className="block appearance-none w-full bg-white border border-grey-light hover:border-grey px-2 py-2 rounded shadow" placeholder="Location" />
                   </div>
                   <div className="mb-4">
                     <label htmlFor="website" className="font-bold text-grey-darker block mb-2">Website</label>
                     <input type="text" id="website" className="block appearance-none w-full bg-white border border-grey-light hover:border-grey px-2 py-2 rounded shadow" placeholder="Link / Email" />
                   </div>
                   <div className="mb-4">
                     <label htmlFor="ownername" className="font-bold text-grey-darker block mb-2">Owner name</label>
                     <input type="text" id="ownername" className="block appearance-none w-full bg-white border border-grey-light hover:border-grey px-2 py-2 rounded shadow" placeholder="Name" />
                   </div>
                   <div className="mb-4">
                     <label htmlFor="email" className="font-bold text-grey-darker block mb-2">Owner email</label>
                     <input type="text" id="email" className="block appearance-none w-full bg-white border border-grey-light hover:border-grey px-2 py-2 rounded shadow" placeholder="Email" />
                   </div>
                   <div className="mb-4">
                     <label htmlFor="password" className="font-bold text-grey-darker block mb-2">Password</label>
                     <input type="password" id="password" className="block appearance-none w-full bg-white border border-grey-light hover:border-grey px-2 py-2 rounded shadow" placeholder=" Password" />
                   </div>
                   <div className="flex items-center justif
                 y-between">
                     <button type="submit" style={{backgroundColor: '#BE3737'}} className=" hover:bg-teal text-white font-bold py-2 px-4 rounded">
                       Create an account
                     </button>
                   </div>
                 </form></div>
               <div className="text-center">
                 <p className="text-grey-dark text-m">Already registered? <Link to="/login" className="no-underline text-blue font-bold">Log in</Link>.</p>
                 <br /><br />
               </div>
             </div></div>
         );
       }
    




export default Owner; 