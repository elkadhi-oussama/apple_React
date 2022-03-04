import React from 'react'
import "./AllComp.css"
import CompOne from './CompOne/CompOne'
import CompTwo from './CompTwo/CompTwo'
const AllComp = () => {
  return (
      <section className='section4'>
    <div className= "row" >
        <CompOne></CompOne>
        <CompTwo></CompTwo>
    </div>
    </section>
  )
}

export default AllComp