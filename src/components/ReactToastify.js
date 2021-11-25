import React from 'react'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
toast.configure()
const ReactToastify = () => {
    const CustomComponent=({close})=>{
        return (
            <div>
                Something went wrong
                <button onClick={close}>Close</button>
            </div>
        )
    }
    const notify = () =>{ 
        toast( "Wow so easy !",{position:toast.POSITION.BOTTOM_CENTER})
        toast.info(<CustomComponent/>,{position:toast.POSITION.BOTTOM_LEFT,autoClose:8000})
        toast.success("Wow so easy !",{position:toast.POSITION.BOTTOM_RIGHT,autoClose:false})
        toast.warn("Wow so easy !",{position:toast.POSITION.TOP_CENTER})
        toast.error("Wow so easy !",{position:toast.POSITION.TOP_LEFT})
        toast("Wow so easy !",{position:toast.POSITION.TOP_RIGHT})
    }
    return (
        <div>
        <button onClick={notify}>Notify !</button>
        {/* <ToastContainer /> */}
      </div>
    )
}

export default ReactToastify
