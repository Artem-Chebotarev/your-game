import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router"
import { getTopicsFromServer } from "../../redux/actionCreators/topicsAC"

const Question = () => {

  let { id } = useParams()

  const dispatch = useDispatch()

  useEffect(() => {
    fetch('http://localhost:3000/api/v1/game')
      .then(response => response.json())
      .then(topicsFromServer => dispatch(getTopicsFromServer(topicsFromServer)))
  }, [])

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
  return (
    
    <>
      {currentQuestion &&
      <>
        <form>
          <div className="card mb-4" style={{width: "24rem", height: "14rem"}}>
            <h5>{currentQuestion.text}</h5>
            <input type="text" className="form-control" placeholder="Your answer"></input>
            <button type="submit" className="btn btn-success w-25 btn-sm">Ответить</button>
          </div>
        </form>
      </>
      }
    </>
  )
}

export default Question
