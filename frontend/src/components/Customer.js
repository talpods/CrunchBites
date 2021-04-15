import React from 'react';

import { Link } from "react-router-dom";

function Customer ()  {
    return (

      <div className="container mx-auto py-20 flex justify-center items-center ">
        <div className="w-1/3">
          <p className="  font-semibold text-center text-xl - py-5 "> Join Crunch Bites Now!</p>
          <div style={{backgroundColor: '#EDB672'}} className="border-teal p-6 border-t-12 mb-6 rounded-lg shadow-lg">
            <form id="user-input"> 
              <div className="mb-4">
              <Link to='/Owner'  className="underline text-blue-700 text-center text-black ">If you are a Restaurant Owner Click here</Link>
              <br/><br/>
                <label htmlFor="username" className="font-bold text-grey-darker block mb-2 ">Username </label>
                <input type="text" id="username" className="block appearance-none w-full bg-white border border-grey-light hover:border-grey px-2 py-2 rounded shadow" placeholder="Your Username" />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="font-bold text-grey-darker block mb-2">Email</label>
                <input type="text" id="email" className="block appearance-none w-full bg-white border border-grey-light hover:border-grey px-2 py-2 rounded shadow" placeholder="Your Email" />
              </div>
              <div className="mb-4">
                <label htmlFor="password" className="font-bold text-grey-darker block mb-2">Password</label>
                <input type="password" id="password" className="block appearance-none w-full bg-white border border-grey-light hover:border-grey px-2 py-2 rounded shadow" placeholder="Your Password" />
              </div>
              <div className="flex items-center justif
            y-between">
                <button type="submit" style={{backgroundColor: '#BE3737'}} className=" hover:bg-teal text-white font-bold py-2 px-4 rounded">
                  Create an account
                </button>
              </div>
            </form></div>
          <div className="text-center">
            <p className="text-grey-dark text-m">Already registered? <Link to="Login"  className="no-underline text-blue font-bold">Log in</Link>.</p>
            <br />
          </div>
         
        
        </div>
        </div>
    );
  }


  export default Customer;