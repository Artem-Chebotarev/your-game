import React from 'react'

function Start() {
  return (
    <body class="text-center">
      <form className="form-signin">
        <h1 className="h3 mb-3 font-weight-normal">Введи имя, чтобы начать игру</h1>
        <label for="inputEmail" className="sr-only">Имя</label>
        <input type="text" id="inputEmail" className="form-control" placeholder="Имя" required autofocus />
        <button className="btn btn-lg btn-primary btn-block" type="submit">Начать игру</button>
      </form>
    </body>
  )
}

export default Start
