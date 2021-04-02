import React, { useState } from 'react'

function Navbar() {
  const [user, setuser] = useState({ name: 'Vasya', points: 10 })
  return (
    <>
      {
        user.name.length ?
          < nav className="navbar navbar-expand-lg navbar-light bg-light" >
            <div className="container-fluid">
              <a className="navbar-brand" to="#">Welcome to game, {user.name}</a>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <a className="nav-link active" aria-current="page" to="#"></a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" to="#">Твои очки :{user.points}</a>
                  </li>
                </ul>
              </div>
            </div>
            <button type="button" className="btn btn-dark mx-5">Завершить игру</button>
          </nav>
          : null
      }
    </>
  )
}

export default Navbar
