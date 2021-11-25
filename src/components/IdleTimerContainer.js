import React,{useRef, useState} from 'react'
import IdleTimer from 'react-idle-timer'
import Modal from 'react-modal'
Modal.setAppElement('#root')
const IdleTimerContainer = () => {
    const [isModalOpen, setIsModalOpen] = useState(false)
       const [isLoggedIn, setIsLoggedIn] = useState(true)
       const showModal=useRef(null)
       const logOut=()=>{
           setIsModalOpen(false)
           setIsLoggedIn(false)
        }
        const idleUser=()=>{
            setIsModalOpen(true)
            showModal.current=setTimeout(logOut,5000)
        }
    const stayActive=()=>{
          setIsModalOpen(false)
          clearTimeout(showModal.current)
    }
    return (
        <div>
            {isLoggedIn?<h2>Hello shafqat</h2>:<h2>Hello guest</h2>}
            <IdleTimer timeout={5 * 1000} onIdle={idleUser} />
            <Modal ref={showModal} isOpen={isModalOpen}  onRequestClose={() => setIsModalOpen(false)} style={
                {
                    overlay: { backgroundColor: "grey" },
                    content: { color: "orange" }
                }

            }>
                <h2>You are idle for some time</h2>
                <p>Click below to stay sign in</p>
                <button onClick={logOut}>Logout</button>
                <button onClick={stayActive}>Keep me login</button>
            </Modal>
        </div>
    )
}

export default IdleTimerContainer










