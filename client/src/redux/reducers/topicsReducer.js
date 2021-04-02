import { GET_TOPICS } from "../types/topicsTypes";


const topicsReducer = (state = [], action) => {
  switch (action.type) {
    case GET_TOPICS:
      return action.payload

    default:
      return state
  }
}

export default topicsReducer