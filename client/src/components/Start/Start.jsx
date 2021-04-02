import React, { useState } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { useHistory } from 'react-router-dom'
import { setUser } from '../../redux/actionCreators/topicsAC'

function Start() {
  const history = useHistory()
  const dispatch = useDispatch()
  const user = useSelector(state => state.user)
  const [value, setValue] = useState(user.name)
  const handlerSubmit = () => {
    dispatch(setUser(value))
    history.push('/game')
  }
  return (
    <div class="text-center">
      <h1 className="h3 mb-3 font-weight-normal">Введи имя, чтобы начать игру</h1>
      <label for="inputEmail" className="sr-only">Имя</label>
      <input type="text" onChange={(e) => setValue(e.target.value)} id="inputEmail" className="form-control" placeholder="Имя" required autofocus value={value} />
      <button className="btn btn-lg btn-primary btn-block" type="submit" onClick={handlerSubmit}>Начать игру</button>
    </div>
  )
}

export default Start
