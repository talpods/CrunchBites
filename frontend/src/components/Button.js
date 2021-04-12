import React from 'react'

function Button({ text, type, onClick, className }) {
    let classes = ""
    switch (type) {
        case "Menu":
            classes = "block text-gray-300 font-semibold hover:bg-browngray-800 hover:text-white px-3 py-2 rounded"
            break;
        case "Light":
            classes = "bg-white pt-2 font-bold text-orangishred border border-orangishred  rounded  px-2 py-2 text-center text-sm w-20  "
            break;
        default:
            classes = "bg-orangishred pt-2 font-bold text-white rounded px-2 py-2 text-center text-sm w-16"

    }
    return (
        <button
            type={type ? type : 'button'}
            className={classes + ' ' + className}
            onClick={onClick}
        >
            {text}
        </button>
    )
}

export default Button
