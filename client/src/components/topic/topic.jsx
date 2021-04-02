import { Link } from "react-router-dom";
import './style.css'

export default function Topic({topic}) {

  const questions = topic.questions

  return (
    <>
      <div className="border borderGame d-flex justify-content-center align-items-center w-100 h-100">
        <div className="border border-primary d-flex justify-content-center align-items-center w-100 h-100">
          {topic.name}
        </div>
        {questions.length ? questions.map(question => {
          return (
            <Link
            className="border borderItem d-flex justify-content-center align-items-center w-100 h-100"
            to={`/${question._id}`}
            >
              <div>{question.points}</div>
            </Link>
          )
        })
        : "No questions"
        }
      </div>
    </>
  );
}
