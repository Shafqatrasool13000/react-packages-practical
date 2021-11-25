import React,{forwardRef} from 'react'
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
const TooltipReact = () => {
    const ColoredComponent = () => {
        return <span style={{ color: 'orange' }}>Colored Component</span>
    }
    const CustomChild = forwardRef((props,ref) => {
        return (
            <div ref={ref}>
                <div>first Child</div>
                <div>Second  Child</div>
            </div>
        )
    })
    return (
        <div>
            <div>
                <Tippy arrow={false} delay={1000} placement='top-start' content="Basic tooltip">
                    <button>Hover</button>
                </Tippy>
            </div>
            <div>
                <Tippy content={<span style={{ color: 'red' }}>Html tooltip</span>}>
                    <button>Hover</button>
                </Tippy>
            </div>
            <div>
                <Tippy content={<ColoredComponent />}>
                    <button>Hover</button>
                </Tippy>
            </div>
            <div>
                <Tippy content={<ColoredComponent />}>
                    <CustomChild />
                </Tippy>
            </div>
        </div>
    )
}

export default TooltipReact
