import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router"
import { getTopicsFromServer } from "../../redux/actionCreators/topicsAC"
import './styles.css'
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
  for (let i = 0; i < questions.length; i++) {
    for (let j = 0; j < questions[i].length; j++) {
      if (questions[i][j]._id === id) {
        currentQuestion = questions[i][j]
      }
    }
  }
  return (

    <>
      {currentQuestion &&
        <>
          <div className="d-flex justify-content-center vw-100 vh-100 align-items-center imagepaper" >
            <div className="d-flex flex-column justify-content-center align-items-center mb-4 question vw-75 h-50 rounded-3" >
              <h4 className="w-50 h-30 fw-bold blackText ">{currentQuestion.text}</h4>
              <input type="text" className="form-control w-25 h-20" placeholder="Your answer"></input>
              <button type="submit" className="btn btn-dark w-25 btn-sm mt-5">Ответить</button>
            </div>
          </div>
        </>
      }
    </>
  )
}

export default Question
