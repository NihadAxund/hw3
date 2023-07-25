

import React from 'react'

export default function Colors() {
  let colors = ['red', 'green', 'black', 'white', 'gold'];
  

  return (
    <div className="radio-container">
      {colors.map((color, index) => (
        <React.Fragment key={index}>
          <label
            htmlFor={color}
            className={'radio-button'}
            style={{ backgroundColor: color }}
          ></label>

        </React.Fragment>
      ))}
    </div>
  )
}
