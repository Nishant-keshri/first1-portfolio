import React from 'react'

const Skill = () => {
  return (
    <>
    <div className="head">
      <h5>My Skills</h5>
      <h1>My Expertise:</h1></div>
    <div className='skillup'>
      <div className="skillall">
        <div className="first">
            <img className='skillimage' src="/web.webp" alt="" srcset="" />
            <div className="firstinside">Webflow Development</div>
            <div className="firstinside2">I can design any UIs provided with the use of HTML5, CSS, JavaScript, React.js and Next.js. And Backend language "Express" and "Python". </div>
        </div>
      </div>
      <div className="skillall">
      <div className="first">
            <img  className='skillimage' src="ai.webp" alt="" srcset="" />
            <div className="firstinside">Advance use of AIs.</div>
            <div className="firstinside2">Can create any functions or Features as per client requirement with active use of AI and other new edge cutting technologies.</div>
        </div></div>
        <div className="skillall">
        <div className="first">
            <img className='skillimage' src="/backend.webp" alt="" srcset="" />
            <div className="firstinside">Backend and Databases</div>
            <div className="firstinside2">Give client facilities to store the viewers data in Databases like MongoDb. And with the help of backend store databases.</div>
        </div></div>
        <div className="skillall">
        <div className="first">
            <img className='skillimage' src="/python.webp" alt="" srcset="" />
            <div className="firstinside">Involvement of Other language</div>
            <div className="firstinside2">Build impactful and different combination of features by indulging unconventional languages like Python. So different features now available.</div>
        </div></div>     
    </div>
    </>
  )
}

export default Skill
