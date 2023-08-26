import { useState } from "react"
import { api } from "./api"
import MyAccordion from "./MyAccordion"
import "./style.css"

const Accordion = () => {

    const [data, setData] = useState(api)
    return (
        <>

            <section className="main-accordion">

                <h3 className="mb-5">REACT Interview Questions</h3>

                {data.map((curElem) => {

                    return <MyAccordion key={curElem.id} {...curElem} />

                })}

            </section>
        </>
    )
}

export default Accordion;