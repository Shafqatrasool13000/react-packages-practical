import React, { useState } from 'react'
import Modal from 'react-modal'
const ReactModal = () => {
    Modal.setAppElement('#root')
    const [isModalOpen, setIsModalOpen] = useState(false)
    return (
        <>
         <button onClick={()=>setIsModalOpen(true)}>Open Modal</button>   
         <Modal isOpen={isModalOpen} shouldCloseOnOverlayClick={false} onRequestClose={()=>setIsModalOpen(false)} style={
             {overlay:{backgroundColor:"grey"},
            content:{color:"orange"}}
             
         }>
             <h2>Modal Intro</h2>
             <p>Modal Description</p>
         </Modal>
        </>
    )
}

export default ReactModal
