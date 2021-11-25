import React, { useState } from 'react'
import { ChromePicker } from 'react-color'

const ColorPicker = () => {
    const [color, setColor] = useState('#fff')
    const [showColorPicker, setShowColorPicker] = useState(false)
    return (
        <>
            <button onClick={()=>setShowColorPicker(()=>!showColorPicker)}>{showColorPicker?'close Color picker':'show color picker'}</button>
            {
                showColorPicker &&
                    <div>
                    <ChromePicker color={color} onChange={(updatedColor) => setColor(updatedColor.hex)} />
                    </div>
            }
            <h2>You picked color {color}</h2>
        </>
    )
}

export default ColorPicker
