import React from 'react'

function Faq({ currentData,  isActive,onToggle }) {

    const {question, answer} = currentData;



   
    return (
        <>
            <li>
                <div className='accordion-grid'>
                    <p>{question}</p>
                    <button onClick={onToggle} className={isActive ? "active-btn" : ""}>{isActive ? "Close" : "Show"}</button>
                </div>
                <p>{isActive && answer}</p>
            </li>
        </>
    )
}

export default Faq