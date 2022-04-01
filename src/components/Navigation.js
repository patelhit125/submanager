import React from 'react'
import { Link } from 'react-router-dom'
import dashboard from '../resources/icons/Activity.svg'
import calendar from '../resources/icons/Calendar.svg'
import graph from '../resources/icons/Graph.svg'
import category from '../resources/icons/Category.svg'
import nightmode from '../resources/icons/Night-mode.svg'
import setting from '../resources/icons/Setting.svg'

const Navigation = () => {
  return (
    <div>
      <nav className="sideBar">
        <div className="profile">
          <i className="fa-solid fa-user"></i>
        </div>
        <ul className="navLinks">
          <li>
            <Link to="/" className="link">
              <i className="link-icon"><img src={dashboard} alt='' /></i>
              <span className="link-text">Dashboard</span>
            </Link>
          </li>
          <li>
            <Link to="/" className="link">
              <i className="link-icon"><img src={graph} alt='' /></i>
              <span className="link-text">Spendings</span>
            </Link>
          </li>
          <li>
            <Link to="/" className="link">
              <i className="link-icon"><img src={calendar} alt='' /></i>
              <span className="link-text">Calendar</span>
            </Link>
          </li>
          <li>
            <Link to="/" className="link link-like">
              <i className="link-icon"><img src={category} alt='' /></i>
              <span className="link-text">Subscriptions</span>
            </Link>
          </li>
        </ul>
        <ul className="navLinks">
          <li>
            <Link to="/" className="link" data-theme>
              <i className="link-icon"><img src={nightmode} alt='' /></i>
              <span className="link-text">Dark mode</span>
            </Link>
          </li>
          <li>
            <Link to="/" className="link">
              <i className="link-icon"><img src={setting} alt='' /></i>
              <span className="link-text">Settings</span>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Navigation