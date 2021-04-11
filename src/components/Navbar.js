import React from 'react'
import { Link } from 'react-router-dom'
import Button from './Button'
import Logo from './Logo'

function Navbar() {
    return (
        <div>
            <nav class="flex items-center justify-between bg-browngray py-1 pr-10 pt-2">
                <div class="flex items-center">
                  <Logo/>


                    <div id="nav-content"
                        class="hidden lg:flex md:flex content-start space-x-6 lg:block md:block p-4 mx-12">
                     <Link to="/">
                            <Button type="Menu" text="Home"/>
                        </Link>
                        <Link to={'Restaurants'}>
                            <Button type="Menu" text="Restaurants"/>
                        </Link>
                        <Link to={'Orders'}>
                            <Button type="Menu" text="Order History"/>
                        </Link>
                           
                    </div>
                </div>

                <div class="flex space-x-4 ">


                    <Button text="Login" type="Dark" />

                    <Button text="Sign up" type="Light" />



                    <div class=" block lg:hidden md:hidden pt-2">
                        <button id="nav-toggle" type="button" class="text-white">
                            <svg class="h-6 w-6 fill-current" viewBox="0 0 24 24">
                                <path
                                    d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6 17h-12v-2h12v2zm0-4h-12v-2h12v2zm0-4h-12v-2h12v2z" />
                            </svg>
                        </button>
                    </div>

                </div>


            </nav>
        </div>
    )
}

export default Navbar
