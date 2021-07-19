import React from 'react'
import PropTypes from 'prop-types'

const Sidebar = props => {
  return (
    <aside className="journal__side-bar">
      <h1>SideBar</h1>
      <div className="journal__sidebar-navbar">
        <h3>
          <i className="far fa-moon"></i>
          <span>Carlos</span>
        </h3>
        <button className="btn">
          Logout
        </button>
      </div>
      <div className="journal__new-entry">
        <i className="far fa-calendar-plus fa-2x"></i>
        <p >New Entry</p>
      </div>
    </aside>
  )
}

Sidebar.propTypes = {

}

export default Sidebar
