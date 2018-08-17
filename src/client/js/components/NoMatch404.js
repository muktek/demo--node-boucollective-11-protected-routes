import React from 'React'
import {Link} from 'react-router-dom'


const NoMatch404 = () => {
  return <div className="page404">
    <h2 className="page404__title">404</h2>
    <h4 className="page404__subtitle">Page Not Found</h4>
    <p className="page404__text">Maybe next time</p>
    <div className="page404__btnbox">
      <a className="page404__btn-home" href="/">Home Page</a>
      <Link className="page404__btn-listings" to="/listings">Listings</Link>
    </div>

  </div>
}

export default NoMatch404
