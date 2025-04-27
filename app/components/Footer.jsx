import React from 'react'

const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-container">
        <div className="footer-title">PortFolio</div>
        <div className="footer-right">
          <div className="footer-icons">
            <a href="http://https://github.com/Nishant-keshri"><img src="/git.jpg" alt="facebook" /></a>
            <a href="https://www.instagram.com/_reyansh_keshri/"><img src="/insta.png" alt="instagram" /></a>
            <a href="https://x.com/KeshriNishant36"><img src="/twiter.jpg" alt="twitter" /></a>
            <a href=""><img src="/linked.jpg" alt="linkedin" /></a>
          </div>
          <div className="footer-text">
            © All rights reserved || @Nishant-keshri
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
