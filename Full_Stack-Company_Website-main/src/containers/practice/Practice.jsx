import React from 'react'
import { useRef } from 'react'
import {motion ,useScroll,useTransform} from 'framer-motion';
import './Practice.css';
const Practice = () => {
const sectionRef= useRef(null);
const arr =  ['one','two','three','four','five','six'];
const {scrollYProgress} = useScroll({
    target:sectionRef,
    offset:['start start' , 'end end'],
})
const x = useTransform(scrollYProgress,[0,1],[0,-1800]);
  return (
    <div className='practice' ref={sectionRef}>
        < div className='sticky-container' >
         <motion.div className='cards-row' style={{x}}>
            {
                arr.map((item,index)=>{
                    return(
                        <div className='card' key={index}>
                    <h3>{item}</h3>
                            </div>
                    )
                })
            }
         </motion.div>
        </div>
    
    </div>
  )
}

export default Practice