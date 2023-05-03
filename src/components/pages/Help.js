import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

const Help = () => {
  return (
    <div>
      <h1>Website Help</h1>
      <p className="help">
        If you have any questions or concerns that are not addressed by FAQ,
        please feel free to contact us using the information provided. Support
        will be with you as soon as possible
      </p>
      <section className="navlink">
        <NavLink to="faq">FAQ</NavLink>
        <NavLink to="contact">Contact US</NavLink>
      </section>

      <footer className="footer">
        <p>
          <p>&copy; 2023 JOB CENTER. All rights reserved.</p>
        </p>
      </footer>

      <Outlet />
    </div>
  )
}
export default Help
