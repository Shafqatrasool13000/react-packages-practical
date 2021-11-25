import React from 'react'
import { IconContext } from "react-icons";
import { FaReact } from "react-icons/fa";
import { MdAddShoppingCart } from "react-icons/md";
import { RiGridFill } from "react-icons/ri";
const ReactIcons = () => {
    return (
        <div>
            <h1>React Icons</h1>
            <IconContext.Provider value={{ color: 'purple', size: '15rem' }}>
                <FaReact />
                <MdAddShoppingCart color='red' size='5rem' />
                <RiGridFill />
            </IconContext.Provider>
        </div>
    )
}

export default ReactIcons
