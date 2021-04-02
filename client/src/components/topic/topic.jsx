import { Link } from "react-router-dom";

export default function Topic({topic}) {

  const questions = topic.questions

  return (
    <>
      <div className="border border-danger d-flex justify-content-center align-items-center w-100 h-100">
        <div className="border border-primary d-flex justify-content-center align-items-center w-100 h-100">
          {topic.name}
        </div>
        {questions.length ? questions.map(question => {
          return (
            <Link
            className="border border-primary d-flex justify-content-center align-items-center w-100 h-100"
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
