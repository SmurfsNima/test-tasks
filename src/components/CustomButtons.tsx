import React from 'react'
interface CustomButtoProps {
    text : string,
    otherClasses? : string,
}
export const CustomButtons = ({ text , otherClasses  } : CustomButtoProps) => {
  return (
    <button type='button' disabled= {true} className={`  text-white py-2 px-8 rounded-2xl outline-none disabled:opacity-50 ${otherClasses}`}>{text}</button>
  )
}
