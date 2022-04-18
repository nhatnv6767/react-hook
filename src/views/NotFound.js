import React from 'react'
import { useHistory } from 'react-router-dom'

function NotFound() {
  let history = useHistory()
  const handleClickBtn = () => {
    history.push('/')
  }
  return (
    <div className="not-found-container">
      <h4>This page isn't available</h4>
      <h5>The link may be broken, or the page may have been removed. Check to see if the link you're trying to open is correct.</h5>
      <button
        className="btn btn-primary"
        onClick={handleClickBtn}
      >
        Go to HomePage
      </button>
    </div>
  )
}

export default NotFound