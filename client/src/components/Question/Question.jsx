import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useHistory, useParams } from "react-router"
import { getTopicsFromServer } from "../../redux/actionCreators/topicsAC"

const Question = () => {

  let { id } = useParams()
  const [input, setInput] = useState('')
  const [result, setResult] = useState('')

  const dispatch = useDispatch()
  const history = useHistory()

  const topics = useSelector(state => state.topics)

  const questions = topics.map(topic => topic.questions)

  let currentQuestion;

  for (let i=0; i<questions.length; i++) {
    for (let j=0; j<questions[i].length; j++) {
      if (questions[i][j]._id === id) {
        currentQuestion = questions[i][j]
      }
    }
  }

  const handlerChange = (event) => {
    setInput(event.target.value)
  }

  const handlerCheckAnswer = async () => {
    if (input === currentQuestion.answer) {
      setResult('Правильный ответ')
    } else {
      setResult(`Вы ошиблись. Правильный ответ: ${currentQuestion.answer}`)
    }

    await fetch('http://localhost:3000/api/v1/game', {
      method: "POST",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify({id})
    })
    
  
    setTimeout(() => {
      setResult('Следующая ошибка может быть последней для тебя.')
    }, 2000)

    setTimeout(() => {
      history.push('/game')
    }, 5000)
  }

  return (
    
    <>
      {currentQuestion &&
      <>
        <div className="card mb-4" style={{width: "24rem", height: "14rem"}}>
          <h5>{currentQuestion.text}</h5>
          <input type="text" onChange={handlerChange} className="form-control" placeholder="Your answer"></input>
          <button type="submit" onClick={handlerCheckAnswer} className="btn btn-success w-25 btn-sm">Ответить</button>
          {result ? result : ''}
        </div>
      </>
      }
    </>
  )
}

export default Question
