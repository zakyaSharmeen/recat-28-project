import React, { useEffect, useState } from 'react'
import faq from "../jsonData/dummyData.json"
import Faq from './Faq'


function Accordian() {


    const [data, setData] = useState([])
    const [activeId, setActiveId] = useState(false)


    useEffect(() => {
        setData(faq)

    }, [])


    const handleButton = (id) =>{
        setActiveId((prevId) => (prevId === id) ? false : id)
    }


    return (
        <>
            <h1>Accordian with dummyjson data</h1>
            <ul className='section-accordion'>
                {
                    data.map((currentData) => {
                        return (
                           
                            <Faq key={currentData.id} currentData={currentData} isActive={activeId === currentData.id}
                            onToggle = {() => handleButton(currentData.id)}/>
                        )



                    })
                }
            </ul>
        </>
    )
}

export default Accordian