import React from 'react'
import LogoImg from '../img/logo3.png'

function Logo() {
    return (
        <div>
        <a href="index.html"> <img src={LogoImg} alt="CrunchBites"
            class="w-32 h-auto md:w-auto md:h-auto ml-6" /></a>
    </div>
    )
}

export default Logo
