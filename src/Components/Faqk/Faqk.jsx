import React, { useState } from 'react'
import './Faqk.css'
import {APie} from './faqkapi'
import DevFaqks from './DevFaqk'

const Faqk = () => {

    const[data,setData] = useState(APie);

  return (
    <div>
        {
            data.map((curElem) => {
                const{id} = curElem;
                return <DevFaqks key={id} {... curElem}/>;
            })
        }
      
    </div>
  )
}

export default Faqk
