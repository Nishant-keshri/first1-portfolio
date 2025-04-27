import React from 'react'

const Recent = () => {
  return (
    <>
      <div className='projects' id='works'>
        <div className="recent">
          <h5>Recent Projects</h5>
          <h1>My PortFolio</h1>
        </div>
        <div className='dribbleout'><button className="visit">Visit my dribble</button></div>
      </div>
      <div className="allworks">
        <div className="works">
          <img src="/project1.png" alt="" srcset="" />
          <div className="projectname">Password-Manager</div>
          <div className="projectdescription">PassManager is a Website which helps you to manage your Passwords of the respective Web application. You can save your password with User-name and Url.</div>
          <a href="http://localhost:3001/"><div className="projectlink">View in dribbble</div></a>
        </div>
        <div className="works">
          <img src="/project2.png" alt="" srcset="" />
          <div className="projectname">ToDo List</div>
          <div className="projectdescription">ToDo List helps one to maintain their daily tasks it only takes few clicks to save one tasks user can add, remove and delete with few clicks.</div>
          <a href="http://localhost:5173/"><div className="projectlink">View in dribbble</div></a>
        </div>
      </div>
    </>
  )
}

export default Recent
