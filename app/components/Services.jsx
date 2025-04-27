import React from 'react'

const Services = () => {
  return (
    <div className='Services' id='services'>
      <div className="leftservice">
        <span className='hey'>Hey, There</span> 
        <div className="up typing-effect text-white text-3xl font-bold">
        I am Nishant Keshri.
        </div>
        <div className="center">
             I build sleek, <span>high-performance UIs</span> using cutting-edge <span>web technologies</span>.
        </div>
        <div className="bottom">I’m a self-taught developer on a mission to make education free and accessible for every student, no matter where they come from.</div>
        <div className="button"><a href="#contact"><button>Get in Touch</button></a></div>
      </div>
      <div ><img className="rightservice" src="/MYIMAGE.jpg" alt=""/></div>
    </div>
  )
}

export default Services
