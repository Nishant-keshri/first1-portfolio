import React from 'react'
import './Information.css'

const Information = () => {
  return (
    <div className='alldata'>
      <div className="data">
        <div className="myinfo">My Information...</div>
        <div className="myname">
            <div className="fullname allsame">
                Fullname
            </div>
            <div className="nishant">Nishant Keshri</div>
        </div>
        <div className="contactme">
            <div className="contactinfo allsame">Contact Information..</div>
            <div className="emailmy nishant">nishantkeshri369@gmail.com</div>
            <div className="allsame">Phone No.</div>
            <div className="nishant">+91 8294447517</div>
        </div>
        <div className="location">
            <div className="place allsame">Current Location..</div>
            <div className="patna nishant">Patna, Bihar-1</div>
        </div>
      </div>
    </div>
  )
}

export default Information
