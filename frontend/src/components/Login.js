import React from 'react';
import { Link } from "react-router-dom";



function Login() {
  return (



    <div className="container mx-auto py-20 flex justify-center items-center ">
      <div className="w-1/3">
        <p className="  font-semibold text-center text-xl - py-5 "> Login to Crunch Bites...</p>
        <div style={{ backgroundColor: '#EDB672' }} className="border-teal p-6 border-t-12 mb-6 rounded-lg shadow-lg">
          <form id="user-input">
            <div className="mb-4">
              <label htmlFor="username" className="font-bold text-grey-darker block mb-2 ">Username </label>
              <input type="text" id="username" className="block appearance-none w-full bg-white border border-grey-light hover:border-grey px-2 py-2 rounded shadow" placeholder="Your Username " />
            </div>
            <div className="mb-4">
              <label htmlFor="password" className="font-bold text-grey-darker block mb-2">Password</label>
              <input type="password" id="password" className="block appearance-none w-full bg-white border border-grey-light hover:border-grey px-2 py-2 rounded shadow" placeholder="Your Password" />
            </div>
            <div className="flex items-center justif
          y-between">
              <button type="submit" style={{ backgroundColor: '#BE3737' }} className=" hover:bg-teal text-white font-bold py-2 px-4 rounded">
                Login
          </button>
            </div>
          </form>
        </div>
        <div>
          <p style={{ textAlign: 'center', marginRight: 4 }} className="text-grey-dark text-m">Don't have an account?</p>
          <Link to='/customer' style={{ float: 'left', marginLeft: 173 }} className="no-underline text-center font-bold"> I am a customer</Link>
          <br />
          <Link to='/Owner' style={{ float: 'left', marginLeft: 173 }} className="no-underline text-center text-black font-bold"> I am a restaurant owner</Link>
        </div>
        <br /><br />
      </div>
    </div>

  );
}

export default Login;